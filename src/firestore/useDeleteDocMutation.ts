import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { DocumentData, deleteDoc, WithFieldValue, DocumentReference } from "firebase/firestore";

import { FirebaseError } from "firebase/app";
import { useMemo } from "react";

export type UseDeleteDocMutationValues<AppModelType> = {
    data: WithFieldValue<AppModelType>;
};

export type UseDeleteDocMutationOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData,
    TContext = unknown
> = {
    reference: DocumentReference<AppModelType, DbModelType> | null;
    options?: Omit<UseMutationOptions<void, FirebaseError, void, TContext>, "mutationFn" | "mutationKey">;
};

export const useDeleteDocMutation = <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData,
    TContext = unknown
>({
    reference,
    options = {}
}: UseDeleteDocMutationOptions<AppModelType, DbModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        ...options,
        mutationFn: async () => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }
            await deleteDoc<AppModelType, DbModelType>(reference);
        },
        mutationKey
    });
};
