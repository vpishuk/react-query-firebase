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

/**
 * Custom hook that sets up a mutation for updating a document in a Firestore database.
 *
 * This hook utilizes `useMutation` for performing asynchronous operations to update the document
 * and retrieve the latest data snapshot. The update functionality can be configured with a custom
 * converter if needed.
 *
 * @param {UseUpdateDocMutationOptions<AppModelType, DbModelType, TContext>} options - Configuration options for the mutation,
 * including Firestore reference, an optional Firestore data converter, and additional mutation options.
 *
 * `reference` - The Firestore document reference that identifies the document to be updated.
 *
 * `converter` - An optional Firestore converter for transforming the database response into a custom type.
 *
 * `options` - Additional options that customize the mutation's behavior.
 *
 * @returns {UseMutationResult<AppModelType, Error, {data: AppModelType}, TContext>} An object returned by `useMutation`
 * which includes functions to start the mutation and properties that represent the different states of the mutation.
 */
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
