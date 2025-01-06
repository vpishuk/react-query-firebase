import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import {
    DocumentData,
    addDoc,
    WithFieldValue,
    CollectionReference,
    getDoc,
    FirestoreDataConverter
} from "firebase/firestore";

import { FirebaseError } from "firebase/app";
import { useMemo } from "react";

export type UseAddDocMutationValues<AppModelType> = {
    data: WithFieldValue<AppModelType>;
};

export type UseAddDocMutationOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData,
    TContext = unknown
> = {
    reference: CollectionReference<AppModelType, DbModelType>;
    converter?: FirestoreDataConverter<AppModelType, DbModelType>;
    options?: Omit<
        UseMutationOptions<AppModelType, FirebaseError, UseAddDocMutationValues<AppModelType>, TContext>,
        "mutationFn" | "mutationKey"
    >;
};

export const useAddDocMutation = <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData,
    TContext = unknown
>({
    reference,
    converter,
    options = {}
}: UseAddDocMutationOptions<AppModelType, DbModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference.path], [reference.path]);

    return useMutation({
        ...options,
        mutationFn: async ({ data }) => {
            const docRef = await addDoc<AppModelType, DbModelType>(reference, data);
            const docSnap = await getDoc(converter ? docRef.withConverter(converter) : docRef);
            return docSnap.data() as AppModelType;
        },
        mutationKey
    });
};
