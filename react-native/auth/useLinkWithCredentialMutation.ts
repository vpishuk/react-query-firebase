import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { linkWithCredential, FirebaseAuthTypes } from "@react-native-firebase/auth";

import { LINK_WITH_CREDENTIAL_MUTATION_KEY } from "./mutation-keys";
import { ReactNativeFirebase } from "@react-native-firebase/app";

export type UseLinkWitCredentialMutationVariables = {
    user: FirebaseAuthTypes.User;
    credential: FirebaseAuthTypes.AuthCredential;
};

/**
 * Custom hook for handling linking of Firebase account to auth provider using credential
 * This hook utilizes the `useMutation` mechanism to perform the sign-in operation.
 * @param {Omit<UseMutationOptions<FirebaseAuthTypes.UserCredential, ReactNativeFirebase.NativeFirebaseError, UseLinkWitCredentialMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.
 * @returns {UseMutationResult<FirebaseAuthTypes.UserCredential, ReactNativeFirebase.NativeFirebaseError, UseLinkWitCredentialMutationVariables, TContext>} The result object from the useMutation hook, containing the mutation function and its current state.
 */
export const useLinkWithCredentialMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<
            FirebaseAuthTypes.UserCredential,
            ReactNativeFirebase.NativeFirebaseError,
            UseLinkWitCredentialMutationVariables,
            TContext
        >,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    return useMutation({
        ...options,
        mutationFn: async ({ user, credential }: UseLinkWitCredentialMutationVariables) =>
            linkWithCredential(user, credential),
        mutationKey: LINK_WITH_CREDENTIAL_MUTATION_KEY
    });
};
