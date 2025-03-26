import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { FirebaseFirestoreTypes, addDoc, WithFieldValue, getDoc } from "@react-native-firebase/firestore";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useMemo } from "react";

export type UseAddDocMutationValues<AppModelType> = {
    data: WithFieldValue<AppModelType>;
};

export type UseAddDocMutationOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData,
    TContext = unknown
> = {
    reference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;
    options?: Omit<
        UseMutationOptions<
            AppModelType,
            ReactNativeFirebase.NativeFirebaseError,
            UseAddDocMutationValues<AppModelType>,
            TContext
        >,
        "mutationFn" | "mutationKey"
    >;
};

/**
 * Provides a mutation hook to add a document to a Firestore collection utilizing React Query's `useMutation`.
 * It handles addition and optional conversion of the document data in Firestore.
 *
 * @param {Object} options - Options for the mutation hook
 * @param {FirebaseFirestore.FirebaseFirestoreTypes.CollectionReference<AppModelType>} options.reference - Firestore collection reference where the document should be added.
 * @param {UseMutationOptions<AppModelType, Error, { data: DbModelType }, TContext>} [options.options={}] - Optional configuration for the mutation.
 *
 * @returns {UseMutationResult<AppModelType, Error, { data: DbModelType }, TContext>} The mutation hook result containing status, error, and data of the mutation process.
 */
export const useAddDocMutation = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData,
    TContext = unknown
>({
    reference,
    options = {}
}: UseAddDocMutationOptions<AppModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference.path], [reference.path]);

    return useMutation({
        ...options,
        mutationFn: async ({ data }) => {
            const docRef = await addDoc<AppModelType>(reference, data);
            const docSnap = await getDoc(docRef);
            return docSnap.data() as AppModelType;
        },
        mutationKey
    });
};
