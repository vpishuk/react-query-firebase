import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { FirebaseFirestoreTypes, setDoc, WithFieldValue } from "@react-native-firebase/firestore";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useMemo } from "react";

export type UseSetDocMutationValues<AppModelType> = {
    data: WithFieldValue<AppModelType>;
};

export type UseSetDocMutationOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData,
    TContext = unknown
> = {
    reference: FirebaseFirestoreTypes.DocumentReference<AppModelType> | null;
    options?: Omit<
        UseMutationOptions<
            void,
            ReactNativeFirebase.NativeFirebaseError,
            UseSetDocMutationValues<AppModelType>,
            TContext
        >,
        "mutationFn" | "mutationKey"
    >;
};

/**
 * Custom hook to create a mutation for setting a document in a Firestore-like database.
 * The mutation can be configured with options and reference to specific document path.
 *
 * @param {UseSetDocMutationOptions<AppModelType, TContext>} param0 - The options for configuring the mutation, including the document reference and additional mutation options.
 * @param {Object} param0.reference - The reference object that contains the path to the document.
 * @param {Object} param0.options - Additional options for the mutation, can configure aspects like onSuccess or onError callbacks.
 * @returns {MutationResult} The result of the mutation operation, which includes states like isLoading, isSuccess, isError, and methods to control the mutation process.
 */
export const useSetDocMutation = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData,
    TContext = unknown
>({
    reference,
    options
}: UseSetDocMutationOptions<AppModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        ...options,
        mutationFn: ({ data }) => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }
            return setDoc<AppModelType>(reference, data);
        },
        mutationKey
    });
};
