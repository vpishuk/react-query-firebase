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
