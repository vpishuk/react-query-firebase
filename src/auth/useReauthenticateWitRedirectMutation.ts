import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { reauthenticateWithRedirect, AuthProvider, PopupRedirectResolver, User } from "firebase/auth";

import { REAUTHENTICATE_WITH_REDIRECT_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseReauthenticateWitRedirectMutationVariables = {
    authProvider: AuthProvider;
    popupRedirectResolver?: PopupRedirectResolver;
    user: User;
};

export const useReauthenticateWitRedirectMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<void, FirebaseError, UseReauthenticateWitRedirectMutationVariables, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    return useMutation({
        ...options,
        mutationFn: async ({
            authProvider,
            user,
            popupRedirectResolver
        }: UseReauthenticateWitRedirectMutationVariables) =>
            reauthenticateWithRedirect(user, authProvider, popupRedirectResolver),
        mutationKey: REAUTHENTICATE_WITH_REDIRECT_MUTATION_KEY
    });
};
