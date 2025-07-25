import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { FirebaseAuthTypes, signInWithCredential } from "@react-native-firebase/auth";

import { SIGN_IN_WITH_CREDENTIAL_MUTATION_KEY } from "./mutation-keys";
import { useAuth } from "./useAuth";
import { ReactNativeFirebase } from "@react-native-firebase/app";

export type UseSignInWithCredentialMutationVariables = {
    credential: FirebaseAuthTypes.AuthCredential;
};

/**
 * Custom hook for handling sign in using credential
 * This hook utilizes the `useMutation` mechanism to perform the sign-in operation.
 * @param {Omit<UseMutationOptions<FirebaseAuthTypes.UserCredential, FirebaseError, UseSignInWithCredentialMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.
 * @returns {UseMutationResult<FirebaseAuthTypes.UserCredential, FirebaseError, UseSignInWithCredentialMutationVariables, TContext>} The result object from the useMutation hook, containing the mutation function and its current state.
 */
export const useSignInWithCredentialMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<
            FirebaseAuthTypes.UserCredential,
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
