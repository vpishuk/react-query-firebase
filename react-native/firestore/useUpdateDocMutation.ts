import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { FirebaseFirestoreTypes, updateDoc, getDoc, UpdateData } from "@react-native-firebase/firestore";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useMemo } from "react";

export type UseUpdateDocMutationValues<DbModelType> = {
    data: UpdateData<DbModelType>;
};

export type UseUpdateDocMutationOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData,
    TContext = unknown
> = {
    reference: FirebaseFirestoreTypes.DocumentReference<AppModelType> | null;
    options?: Omit<
        UseMutationOptions<
            AppModelType,
            ReactNativeFirebase.NativeFirebaseError,
            UseUpdateDocMutationValues<AppModelType>,
            TContext
        >,
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
 * @param {UseUpdateDocMutationOptions<AppModelType, TContext>} options - Configuration options for the mutation,
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
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData,
    TContext = unknown
>({
    reference,
    options = {}
}: UseUpdateDocMutationOptions<AppModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        ...options,
        mutationFn: async ({ data }) => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }

            await updateDoc<AppModelType>(reference, data);
            const docSnap = await getDoc(reference);
            return docSnap.data() as AppModelType;
        },
        mutationKey
    });
};
