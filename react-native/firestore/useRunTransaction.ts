import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { runTransaction, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useFirestore } from "./useFirestore";

export type UseRunTransactionValues = <AppModelType = unknown>(
    transaction: FirebaseFirestoreTypes.Transaction
) => AppModelType;

export type UseRunTransactionOptions<AppModelType = unknown, TContext = unknown> = {
    options?: Omit<
        UseMutationOptions<AppModelType, ReactNativeFirebase.NativeFirebaseError, UseRunTransactionValues, TContext>,
        "mutationFn"
    >;
};

/**
 * Custom hook to execute a Firestore transaction using the useMutation hook.
 *
 * @param {UseRunTransactionOptions<AppModelType, TContext>} options - Configuration options for running the transaction.
 * @param {Object} options.options - Options to customize the behavior of useMutation and runTransaction.
 * @returns {UseMutationResult} The result object from the useMutation hook, allowing to track the transaction state and outcome.
 */
export const useRunTransaction = <AppModelType = unknown, TContext = unknown>({
    options = {}
}: UseRunTransactionOptions<AppModelType, TContext>) => {
    const db = useFirestore();

    return useMutation({
        ...options,
        mutationFn: async (transactionFn) => {
            return runTransaction<AppModelType>(db, transactionFn);
        }
    });
};
