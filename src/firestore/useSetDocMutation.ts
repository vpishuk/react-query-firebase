import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { DocumentData, DocumentReference, setDoc, WithFieldValue } from "firebase/firestore";

import { FirebaseError } from "firebase/app";
import { useMemo } from "react";

export type UseSetDocMutationValues<AppModelType> = {
    data: WithFieldValue<AppModelType>;
};

export type UseSetDocMutationOptions<
    AppModelType = unknown,
    DbModelType extends DocumentData = DocumentData,
    TContext = unknown
> = {
    reference: DocumentReference<AppModelType, DbModelType> | null;
    options?: Omit<
        UseMutationOptions<void, FirebaseError, UseSetDocMutationValues<AppModelType>, TContext>,
        "mutationFn" | "mutationKey"
    >;
};

/**
 * Custom hook to create a mutation for setting a document in a Firestore-like database.
 * The mutation can be configured with options and reference to specific document path.
 *
 * @param {UseSetDocMutationOptions<AppModelType, DbModelType, TContext>} param0 - The options for configuring the mutation, including the document reference and additional mutation options.
 * @param {Object} param0.reference - The reference object that contains the path to the document.
 * @param {Object} param0.options - Additional options for the mutation, can configure aspects like onSuccess or onError callbacks.
 * @returns {MutationResult} The result of the mutation operation, which includes states like isLoading, isSuccess, isError, and methods to control the mutation process.
 */
export const useSetDocMutation = <
    AppModelType = unknown,
    DbModelType extends DocumentData = DocumentData,
    TContext = unknown
>({
    reference,
    options
}: UseSetDocMutationOptions<AppModelType, DbModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        ...options,
        mutationFn: ({ data }) => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }
            return setDoc<AppModelType, DbModelType>(reference, data);
        },
        mutationKey
    });
};
