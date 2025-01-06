import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { signInWithRedirect, AuthProvider, PopupRedirectResolver } from "firebase/auth";

import { useAuth } from "../useAuth";
import { SIGN_IN_WITH_REDIRECT_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseSignInWitRedirectMutationVariables = {
    authProvider: AuthProvider;
    popupRedirectResolver?: PopupRedirectResolver;
};

export const useSignInWitRedirectMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<void, FirebaseError, UseSignInWitRedirectMutationVariables, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    const firebaseAuth = useAuth();

    return useMutation({
        ...options,
        mutationFn: async ({ authProvider, popupRedirectResolver }: UseSignInWitRedirectMutationVariables) =>
            signInWithRedirect(firebaseAuth, authProvider, popupRedirectResolver),
        mutationKey: SIGN_IN_WITH_REDIRECT_MUTATION_KEY
    });
};
