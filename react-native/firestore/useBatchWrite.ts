import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { writeBatch, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useFirestore } from "./useFirestore";

export type UseBatchWriteVariables = (batch: FirebaseFirestoreTypes.WriteBatch) => Promise<void> | void;

export type UseBatchWriteOptions<TContext = unknown> = {
    options?: Omit<
        UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, UseBatchWriteVariables, TContext>,
        "mutationFn"
    >;
};

/**
 * Custom hook to perform batch write operations using Firestore.
 * Utilizes a mutation to carry out the batch write transaction.
 * @template TContext - The type of context that can be passed into the hook, defaults to unknown.
 * @param {Object} options - The configuration options for the mutation operation.
 * @returns {Object} Returns an object composed of elements returned by useMutation, including properties such as status, and functions to trigger and control the mutation process.
 */
export const useBatchWrite = <TContext = unknown>({ options = {} }: UseBatchWriteOptions<TContext> = {}) => {
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
