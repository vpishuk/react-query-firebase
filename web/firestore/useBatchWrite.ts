import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { writeBatch, WriteBatch } from "firebase/firestore";

import { FirebaseError } from "firebase/app";
import { useFirestore } from "./useFirestore";

/**
 * @inline
 */
export type UseBatchWriteVariables = (batch: WriteBatch) => Promise<void> | void;

/**
 * @inline
 */
export type UseBatchWriteOptions = {
    /**
     * Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
     */
    options?: Omit<UseMutationOptions<void, FirebaseError, UseBatchWriteVariables>, "mutationFn">;
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
