import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { runTransaction, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { useFirestore } from "./useFirestore";

/**
 * @inline
 */
export type UseRunTransactionValues = <T = unknown>(transaction: FirebaseFirestoreTypes.Transaction) => T;

/**
 * @inline
 */
export type UseRunTransactionOptions<T = unknown, TContext = unknown> = {
    /**
     * Reqct-mutation options that shall omit mutationFn
     */
    options?: Omit<UseMutationOptions<T, Error, UseRunTransactionValues, TContext>, "mutationFn">;
};

/**
 * Executes a Firestore transaction
 *
 * @group Hook
 *
 * @param {UseRunTransactionOptions<T>} options - Configuration options for the mutation.
 *
 * @returns {UseMutationResult<T, Error>} An object representing mutation
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const doc = useGetDocData({
 *      options: {
 *          queryKey: ['key']
 *      },
 *      reference: collection(),
 *      path: 'id'
 *  });
 *  console.log(doc);
 * };
 * ```
 */
export const useRunTransaction = <T = unknown, TContext = unknown>({
    options = {}
}: UseRunTransactionOptions<T, TContext>) => {
    const db = useFirestore();

    return useMutation({
        ...options,
        mutationFn: async (transactionFn) => {
            return runTransaction<T>(db, transactionFn);
        }
    });
};
