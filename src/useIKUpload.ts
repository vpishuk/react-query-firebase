import { useCallback, useContext, useState } from "react";
import { useIKClient } from "./useIKClient";
import { IKContext } from "./IKContext";
import { UploadOptions, UploadResponse } from "imagekit-javascript/dist/src/interfaces";

export type IKUploadErrorCode = "ik/auth-invalid" | "ik/unknown" | "ik/missing-file";

type IKUploadError = { message: string; code: IKUploadErrorCode };

type IKFileProgress = {
    total: number;
    loaded: number;
};

type IKProgress = {
    details: IKFileProgress | null;
    data: UploadResponse | null;
    isUploading: boolean;
    isSuccess: boolean;
    isError: boolean;
    errors: IKUploadError[];
};

export type UseIKUploadOptions = {
    options: Partial<Omit<UploadOptions, "file" | "token" | "signature" | "expire">>;
    onStart?: (progress: IKProgress) => unknown;
    onProgress?: (progress: IKProgress) => unknown;
    onSuccess?: (progress: IKProgress) => unknown;
    onError?: (progress: IKProgress) => unknown;
    onAbort?: (progress: IKProgress) => unknown;
};

export const useIKUpload = ({ options, onStart, onError, onProgress, onSuccess, onAbort }: UseIKUploadOptions) => {
    const [xhr, setXHR] = useState<XMLHttpRequest | null>();

    const [currentProgress, setCurrentProgress] = useState<IKProgress | null>(null);

    const { authenticator, publicKey } = useContext(IKContext);
    const ikClient = useIKClient();

    const abort = useCallback(() => {
        if (xhr) {
            xhr.abort();
        }
    }, [xhr]);

    const uploadInternal = useCallback(async (file: string | Blob | File, fileName?: string): Promise<IKProgress> => {
        let progress: IKProgress = {
            details: null,
            data: null,
            isUploading: false,
            isSuccess: false,
            isError: false,
            errors: []
        };

        setCurrentProgress(progress);

        const onUploadStartCallback = () => {
            progress = {
                ...progress,
                isUploading: true
            };
            setCurrentProgress(progress);
            onStart?.(progress);
        };

        const onAbortCallback = () => {
            progress = {
                ...progress,
                isUploading: false
            };
            setCurrentProgress(progress);
            onAbort?.(progress);
        };

        const onProgressCallback = (e: ProgressEvent<XMLHttpRequestEventTarget>) => {
            progress = {
                ...progress,
                details: {
                    total: e.total,
                    loaded: e.loaded
                }
            };
            setCurrentProgress(progress);
            onProgress?.(progress);
        };

        return Promise.resolve()
            .then(() => {
                if (!file) {
                    throw { ...progress, errors: [{ message: "Missing file", code: "ik/missing-file" }] };
                }

                onUploadStartCallback();
            })
            .then(
                () =>
                    authenticator?.() ??
                    Promise.reject({ ...progress, errors: [{ message: "Missing file", code: "ik/auth-invalid" }] })
            )
            .then(
                ({ signature, token, expire }) =>
                    new Promise((resolve, reject) => {
                        const xhr = new XMLHttpRequest();

                        xhr.upload.addEventListener("progress", onProgressCallback);
                        xhr.upload.addEventListener("abort", onAbortCallback);

                        const params = {
                            fileName: (file instanceof File ? file?.name : fileName) || "filename",
                            ...options,
                            file: file,
                            signature,
                            expire,
                            token,
                            xhr
                        };

                        ikClient.upload(
                            params,
                            (err, result) => {
                                if (err) {
                                    reject({
                                        ...progress,
                                        errors: [{ message: (err as Error)?.message, code: "ik/unknown" }]
                                    });
                                } else {
                                    resolve({
                                        ...progress,
                                        data: result,
                                        isUploading: false,
                                        isSuccess: true
                                    });
                                }

                                xhr.upload.removeEventListener("progress", onProgressCallback);
                            },
                            {
                                publicKey
                            }
                        );

                        setXHR(xhr);
                    })
            );
    }, []);

    const upload = useCallback(
        (file: string | Blob | File, fileName?: string) => {
            uploadInternal(file, fileName).then(
                (result) => {
                    setCurrentProgress(result);
                    onSuccess?.(result);
                },
                (error: IKProgress) => {
                    onError?.(error);
                    setCurrentProgress(error);
                }
            );
        },
        [onError, onSuccess]
    );

    const uploadAsync = useCallback(
        (file: string | Blob | File, fileName?: string) =>
            uploadInternal(file, fileName).then(
                (result) => {
                    setCurrentProgress(result);
                    onSuccess?.(result);
                    return result;
                },
                (progress: IKProgress) => {
                    onError?.(progress);
                    setCurrentProgress(progress);
                    throw progress.errors;
                }
            ),
        [onError, onSuccess]
    );

    return {
        upload,
        uploadAsync,
        abort,
        progress: currentProgress
    };
};
