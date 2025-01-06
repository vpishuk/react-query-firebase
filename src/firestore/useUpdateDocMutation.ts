import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import {
    DocumentData,
    updateDoc,
    getDoc,
    FirestoreDataConverter,
    DocumentReference,
    UpdateData
} from "firebase/firestore";

import { FirebaseError } from "firebase/app";
import { useMemo } from "react";

export type UseUpdateDocMutationValues<DbModelType> = {
    data: UpdateData<DbModelType>;
};

export type UseUpdateDocMutationOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData,
    TContext = unknown
> = {
    reference: DocumentReference<AppModelType, DbModelType> | null;
    converter?: FirestoreDataConverter<AppModelType, DbModelType>;
    options?: Omit<
        UseMutationOptions<AppModelType, FirebaseError, UseUpdateDocMutationValues<DbModelType>, TContext>,
        "mutationFn" | "mutationKey"
    >;
};

export const useUpdateDocMutation = <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData,
    TContext = unknown
>({
    reference,
    converter,
    options = {}
}: UseUpdateDocMutationOptions<AppModelType, DbModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        ...options,
        mutationFn: async ({ data }) => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }

            await updateDoc<AppModelType, DbModelType>(reference, data);
            const docSnap = await getDoc(converter ? reference.withConverter(converter) : reference);
            return docSnap.data() as AppModelType;
        },
        mutationKey
    });
};
