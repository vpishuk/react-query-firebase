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

/**
 * Provides a mutation hook to add a document to a Firestore collection utilizing React Query's `useMutation`.
 * It handles addition and optional conversion of the document data in Firestore.
 *
 * @param {Object} options - Options for the mutation hook
 * @param {FirebaseFirestore.CollectionReference<AppModelType>} options.reference - Firestore collection reference where the document should be added.
 * @param {FirebaseFirestore.FirestoreDataConverter<DbModelType>} [options.converter] - Optional data converter for reading and writing Firestore documents.
 * @param {UseMutationOptions<AppModelType, Error, { data: DbModelType }, TContext>} [options.options={}] - Optional configuration for the mutation.
 *
 * @returns {UseMutationResult<AppModelType, Error, { data: DbModelType }, TContext>} The mutation hook result containing status, error, and data of the mutation process.
 */
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
