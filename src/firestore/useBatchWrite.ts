import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { writeBatch, WriteBatch } from "firebase/firestore";

import { FirebaseError } from "firebase/app";
import { useFirestore } from "../useFirestore";

export type UseBatchWriteVariables = (batch: WriteBatch) => Promise<void> | void;

export type UseBatchWriteOptions<TContext = unknown> = {
    options?: Omit<UseMutationOptions<void, FirebaseError, UseBatchWriteVariables, TContext>, "mutationFn">;
};

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
