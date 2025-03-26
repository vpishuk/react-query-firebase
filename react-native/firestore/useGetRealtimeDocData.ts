import { FirebaseFirestoreTypes, onSnapshot } from "@react-native-firebase/firestore";

import { useEffect, useMemo, useState } from "react";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useDocReference } from "./useDocReference";

/**
 * @inline
 */
export type UseGetRealtimeDocDataOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
> = {
    /**
     * A slash-separated path to a document. Has to be omitted to use
     */
    path?: string;
    /**
     * A reference to a collection.
     */
    reference?:
        | FirebaseFirestoreTypes.CollectionReference<AppModelType>
        | FirebaseFirestoreTypes.DocumentReference<AppModelType>;
    /**
     * Additional path segments that will be applied relative
     * to the first argument.
     */
    pathSegments?: string[];
    /**
     * A callback to be called if the listen fails or is
     * cancelled. No further callbacks will occur.
     */
    onError?: (error: ReactNativeFirebase.NativeFirebaseError | Error) => unknown;
};

/**
 * @inline
 */
export type UseGetRealtimeDocDataResult<AppModelType> = {
    data: AppModelType | null;
    isError: boolean;
    error: ReactNativeFirebase.NativeFirebaseError | Error | null;
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
export const useGetRealtimeDocData = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
    path,
    pathSegments,
    reference,
    onError
}: UseGetRealtimeDocDataOptions<AppModelType>): UseGetRealtimeDocDataResult<AppModelType> => {
    const ref = useDocReference({ path, reference, pathSegments });
    const [doc, setDoc] = useState<AppModelType | null>(null);
    const [isError, setIsError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<ReactNativeFirebase.NativeFirebaseError | Error | null>(null);

    useEffect(() => {
        const unsubscribe = ref
            ? onSnapshot<AppModelType>(ref, {
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
        [doc, isError, error]
    );
};
