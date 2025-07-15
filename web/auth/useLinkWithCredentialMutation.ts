import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { linkWithCredential, User, AuthCredential, UserCredential } from "firebase/auth";

import { LINK_WITH_CREDENTIAL_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseLinkWitRedirectMutationVariables = {
    user: User;
    credential: AuthCredential;
};

/**
 * Custom hook for handling linking of Firebase account to auth provider using credential
 * This hook utilizes the `useMutation` mechanism to perform the sign-in operation.
 * @param {Omit<UseMutationOptions<UserCredential, FirebaseError, UseLinkWitRedirectMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.
 * @returns {UseMutationResult<UserCredential, FirebaseError, UseLinkWitRedirectMutationVariables, TContext>} The result object from the useMutation hook, containing the mutation function and its current state.
 */
export const useLinkWithCredentialMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<UserCredential, FirebaseError, UseLinkWitRedirectMutationVariables, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    return useMutation({
        ...options,
        mutationFn: async ({ user, credential }: UseLinkWitRedirectMutationVariables) =>
            linkWithCredential(user, credential),
        mutationKey: LINK_WITH_CREDENTIAL_MUTATION_KEY
    });
};
