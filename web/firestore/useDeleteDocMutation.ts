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

/**
 * A custom hook that provides a mutation function to delete a document from the database.
 * @param {UseDeleteDocMutationOptions<AppModelType, DbModelType, TContext>} options - An object containing the reference to the document and additional options for the mutation.
 * @param {FirestoreReference<AppModelType, DbModelType>} options.reference - The reference to the document that needs to be deleted.
 * @param {object} options.options - Additional options for the mutation, if any (default is an empty object).
 * @returns {UseMutationResult} An object returned by the `useMutation` hook which includes properties and methods to control the mutation's execution and track its state.
 */
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
