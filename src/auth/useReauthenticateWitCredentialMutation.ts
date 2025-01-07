import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { reauthenticateWithCredential, User, AuthCredential, UserCredential } from "firebase/auth";
import { REAUTHENTICATE_WITH_CREDENTIAL_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseReauthenticateWitCredentialMutationVariables = {
    credential: AuthCredential;
    user: User;
};

/**
 * Custom hook to create a mutation for re-authenticating a user with a given credential.
 * This hook utilizes useMutation from React Query to manage the asynchronous re-authentication
 * process with Firebase credentials. It omits the default "mutationKey" and "mutationFn" options.
 *
 * @param {Omit<UseMutationOptions<UserCredential, FirebaseError, UseReauthenticateWitCredentialMutationVariables, TContext>, "mutationKey" | "mutationFn">}  options - Optional mutation options excluding "mutationKey" and "mutationFn".
 * @returns {UseMutationResult<UserCredential, FirebaseError, UseReauthenticateWitCredentialMutationVariables, TContext>} A useMutation result object managing the loading, error, and result state of the re-authentication mutation.
 */
export const useReauthenticateWitCredentialMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<UserCredential, FirebaseError, UseReauthenticateWitCredentialMutationVariables, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    return useMutation({
        ...options,
        mutationFn: async ({ credential, user }: UseReauthenticateWitCredentialMutationVariables) =>
            reauthenticateWithCredential(user, credential),
        mutationKey: REAUTHENTICATE_WITH_CREDENTIAL_MUTATION_KEY
    });
};
