import { CollectionReference, DocumentData, DocumentReference, onSnapshot } from "firebase/firestore";

import { useEffect, useMemo, useState } from "react";
import { FirebaseError } from "firebase/app";
import { useDocReference } from "./useDocReference";

/**
 * @inline
 */
export type UseGetRealtimeDocDataOptions<AppModelType, DbModelType extends DocumentData = DocumentData> = {
    /**
     * A slash-separated path to a document. Has to be omitted to use
     */
    path?: string;
    /**
     * A reference to a collection.
     */
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
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
 * @param {UseGetRealtimeDocDataOptions<AppModelType, DbModelType>} options
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
export const useGetRealtimeDocData = <AppModelType, DbModelType extends DocumentData = DocumentData>({
    path,
    pathSegments,
    reference,
    onError
}: UseGetRealtimeDocDataOptions<AppModelType, DbModelType>): UseGetRealtimeDocDataResult<AppModelType> => {
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
            data: doc,
            isError,
            isFetching,
            error
        }),
        [doc, isError, error, isFetching]
    );
};
