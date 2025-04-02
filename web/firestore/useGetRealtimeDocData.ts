import { DocumentReference, onSnapshot } from "firebase/firestore";

import { useEffect, useMemo, useState } from "react";
import { FirebaseError } from "firebase/app";
import { useDocReference } from "./useDocReference";
import { AppModel } from "../../types";

/**
 * @inline
 */
export type UseGetRealtimeDocDataOptions<AppModelType extends AppModel = AppModel> = {
    /**
     * A slash-separated path to a document. Has to be omitted to use
     */
    path?: string;
    /**
     * A reference to a collection.
     */
    reference?: DocumentReference<AppModelType, AppModelType>;
    /**
     * Additional path segments that will be applied relative
     * to the first argument.
     */
    pathSegments?: string[];
    /**
     * A callback to be called if the listen fails or is
     * cancelled. No further callbacks will occur.
     */
    onError?: (error: FirebaseError) => unknown;
};

/**
 * @inline
 */
export type UseGetRealtimeDocDataResult<AppModelType> = {
    data: AppModelType | null;
    isError: boolean;
    error: FirebaseError | null;
    isFetching: boolean;
};

/**
 * A hook to get realtime updates to a firestore document.
 *
 * @group Hook
 *
 * @param {UseGetRealtimeDocDataOptions<AppModelType>} options
 *
 * @returns {UseGetRealtimeDocDataResult<AppModelType>}
 *
 * @example
 * ```jsx
 * const firebaseConfig = {};
 * export const MyComponent = () => {
 *  const result = useGetRealtimeDocData('collection/documentId');
 *  return (
 *      <div>
 *          {JSON.stringify(result)}
 *      </div>
 *  );
 * };
 * ```
 */
export const useGetRealtimeDocData = <AppModelType extends AppModel = AppModel>({
    path,
    pathSegments,
    reference,
    onError
}: UseGetRealtimeDocDataOptions<AppModelType>): UseGetRealtimeDocDataResult<AppModelType> => {
    const ref = useDocReference({ path, reference, pathSegments });
    const [doc, setDoc] = useState<AppModelType | null>(null);
    const [isError, setIsError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<FirebaseError | null>(null);

    useEffect(() => {
        const unsubscribe = ref
            ? onSnapshot(ref, {
                  next: async (snapshot) => {
                      setIsFetching(false);
                      setDoc(snapshot.data() || null);
                      setError(null);
                      setIsError(false);
                  },
                  error: (e) => {
                      setIsError(true);
                      setError(e);
                      onError?.(e);
                  }
              })
            : () => {};

        return () => unsubscribe();
    }, [ref, doc, isError, onError, isFetching, error]);

    return useMemo(
        () => ({
            data: { ...(doc || {}), uid: ref?.id ?? "" } as AppModelType,
            isError,
            isFetching,
            error
        }),
        [doc, isError, error, ref, isFetching]
    );
};
