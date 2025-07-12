import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AuthProvider, linkWithRedirect, PopupRedirectResolver, User } from "firebase/auth";

import { LINK_WITH_REDIRECT_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseLinkWitRedirectMutationVariables = {
    user: User;
    authProvider: AuthProvider;
    popupRedirectResolver?: PopupRedirectResolver;
};

/**
 * Custom hook for handling linking of Firebase account to auth provider
 * This hook utilizes the `useMutation` mechanism to perform the sign-in operation.
 * @param {Omit<UseMutationOptions<void, FirebaseError, UseLinkWitRedirectMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.
 * @returns {UseMutationResult<void, FirebaseError, UseLinkWitRedirectMutationVariables, TContext>} The result object from the useMutation hook, containing the mutation function and its current state.
 */
export const useLinkWitRedirectMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<void, FirebaseError, UseLinkWitRedirectMutationVariables, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    return useMutation({
        ...options,
        mutationFn: async ({ user, authProvider, popupRedirectResolver }: UseLinkWitRedirectMutationVariables) =>
            linkWithRedirect(user, authProvider, popupRedirectResolver),
        mutationKey: LINK_WITH_REDIRECT_MUTATION_KEY
    });
};
