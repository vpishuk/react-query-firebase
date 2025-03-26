import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { reauthenticateWithRedirect, FirebaseAuthTypes, PopupRedirectResolver } from "@react-native-firebase/auth";

import { REAUTHENTICATE_WITH_REDIRECT_MUTATION_KEY } from "./mutation-keys";
import { ReactNativeFirebase } from "@react-native-firebase/app";

export type UseReauthenticateWitRedirectMutationVariables = {
    authProvider: FirebaseAuthTypes.AuthProvider;
    popupRedirectResolver?: PopupRedirectResolver;
    user: FirebaseAuthTypes.User;
};

/**
 * Custom hook that provides a mutation to reauthenticate a user with a given authentication provider using redirection.
 * This hook uses the `useMutation` hook from the React Query library to handle async mutation logic.
 *
 * @param {Omit<UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, UseReauthenticateWitRedirectMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configuration object for the mutation. It provides the ability to pass options to customize the behavior of the mutation.
 * @template TContext - The type of any additional context you wish to pass to the mutation.
 * @returns {UseMutationResult<void, ReactNativeFirebase.NativeFirebaseError, UseReauthenticateWitRedirectMutationVariables, TContext>} A mutation result object containing methods and state of the mutation.
 */
export const useReauthenticateWitRedirectMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<
            void,
            ReactNativeFirebase.NativeFirebaseError,
            UseReauthenticateWitRedirectMutationVariables,
            TContext
        >,
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
