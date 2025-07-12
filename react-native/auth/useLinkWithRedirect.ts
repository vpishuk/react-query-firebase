import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { linkWithRedirect, FirebaseAuthTypes, PopupRedirectResolver } from "@react-native-firebase/auth";

import { LINK_WITH_REDIRECT_MUTATION_KEY } from "./mutation-keys";
import { ReactNativeFirebase } from "@react-native-firebase/app";

export type UseLinkWitRedirectMutationVariables = {
    user: FirebaseAuthTypes.User;
    authProvider: FirebaseAuthTypes.AuthProvider;
    popupRedirectResolver?: PopupRedirectResolver;
};

/**
 * Custom hook for handling linking of Firebase account to auth provider
 * This hook utilizes the `useMutation` mechanism to perform the sign-in operation.
 * @param {Omit<UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, UseLinkWitRedirectMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.
 * @returns {UseMutationResult<void, ReactNativeFirebase.NativeFirebaseError, UseLinkWitRedirectMutationVariables, TContext>} The result object from the useMutation hook, containing the mutation function and its current state.
 */
export const useLinkWitRedirectMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<
            void,
            ReactNativeFirebase.NativeFirebaseError,
            UseLinkWitRedirectMutationVariables,
            TContext
        >,
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
