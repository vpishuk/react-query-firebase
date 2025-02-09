import { CollectionReference, DocumentData, DocumentReference, onSnapshot } from "firebase/firestore";

import { useEffect, useState } from "react";
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
    reference: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
    /**
     * Additional path segments that will be applied relative
     * to the first argument.
     */
    pathSegments?: string[];
    /**
     * A callback to be called if the listen fails or is
     * cancelled. No further callbacks will occur.
     */
    onError: (error: FirebaseError) => unknown;
};

/**
 * A hook to get realtime updates to a firestore document.
 *
 * @group Hook
 *
 * @param {UseGetRealtimeDocDataOptions<AppModelType, DbModelType>} options
 *
 * @returns {AppModelType | null}
 *
 * @example
 * ```jsx
 * const firebaseConfig = {};
 * export const MyComponent = () => {
 *  const doc = useGetRealtimeDocData('collection/documentId');
 *  return (
 *      <div>
 *          {JSON.stringify(doc)}
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
}: UseGetRealtimeDocDataOptions<AppModelType, DbModelType>): AppModelType | null => {
    const ref = useDocReference({ path, reference, pathSegments });
    const [doc, setDoc] = useState<AppModelType | null>(null);

    useEffect(() => {
        const unsubscribe = ref
            ? onSnapshot(ref, {
                  next: async (snapshot) => {
                      setDoc(snapshot.data() || null);
                  },
                  error: onError
              })
            : () => {};

        return () => unsubscribe();
    }, [ref, doc]);

    return doc;
};
