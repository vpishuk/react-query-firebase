import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { UserCredential, AuthCredential, signInWithCredential } from "@react-native-firebase/auth";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { SIGN_IN_WITH_CREDENTIAL_MUTATION_KEY } from "./mutation-keys.js";
import { useAuth } from "./useAuth.js";

export type UseSignInWithCredentialMutationVariables = {
    credential: AuthCredential;
};

/**
 * Custom hook for handling sign in using credential
 * This hook utilizes the `useMutation` mechanism to perform the sign-in operation.
 * @param {Omit<UseMutationOptions<UserCredential, ReactNativeFirebase.NativeFirebaseError, UseSignInWithCredentialMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.
 * @returns {UseMutationResult<UserCredential, ReactNativeFirebase.NativeFirebaseError, UseSignInWithCredentialMutationVariables, TContext>} The result object from the useMutation hook, containing the mutation function and its current state.
 */
export const useSignInWithCredentialMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<
            UserCredential,
            ReactNativeFirebase.NativeFirebaseError,
            UseSignInWithCredentialMutationVariables,
            TContext
        >,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    const auth = useAuth();
    return useMutation({
        ...options,
        mutationFn: async ({ credential }: UseSignInWithCredentialMutationVariables) =>
            signInWithCredential(auth, credential),
        mutationKey: SIGN_IN_WITH_CREDENTIAL_MUTATION_KEY
    });
};
