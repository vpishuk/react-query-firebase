import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AuthCredential, UserCredential, signInWithCredential } from "firebase/auth";

import { SIGN_IN_WITH_CREDENTIAL_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";
import { useAuth } from "./useAuth";

export type UseSignInWithCredentialMutationVariables = {
    credential: AuthCredential;
};

/**
 * Custom hook for handling sign in using credential
 * This hook utilizes the `useMutation` mechanism to perform the sign-in operation.
 * @param {Omit<UseMutationOptions<UserCredential, FirebaseError, UseSignInWithCredentialMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.
 * @returns {UseMutationResult<UserCredential, FirebaseError, UseSignInWithCredentialMutationVariables, TContext>} The result object from the useMutation hook, containing the mutation function and its current state.
 */
export const useSignInWithCredentialMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<UserCredential, FirebaseError, UseSignInWithCredentialMutationVariables, TContext>,
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
