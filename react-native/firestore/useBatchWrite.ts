import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { writeBatch, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useFirestore } from "./useFirestore";

/**
 * @inline
 */
export type UseBatchWriteVariables = (batch: FirebaseFirestoreTypes.WriteBatch) => Promise<void> | void;

/**
 * @inline
 */
export type UseBatchWriteOptions = {
    options?: Omit<
        UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, UseBatchWriteVariables>,
        "mutationFn"
    >;
};

/**
 * Custom hook to perform batch write operations using Firestore.
 *
 * @group Hook
 *
 * @param {UseBatchWriteOptions} options - Configuration options for the query.
 *
 * @returns {UseMutationResult<void, Error, UseAddDocMutationValues<AppModelType>>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useBatchWrite({
 *      options: {
 *      },
 *  });
 *
 *  // ....
 *  mutate(() => {
 *      ref.update({...})
 *  });
 *  // ....
 * };
 * ```
 */
export const useBatchWrite = ({ options = {} }: UseBatchWriteOptions = {}) => {
    const db = useFirestore();

    return useMutation({
        ...options,
        mutationFn: async (batchWriteFn) => {
            const batch = writeBatch(db);
            await batchWriteFn(batch);
            return batch.commit();
        }
    });
};
