import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { signInWithRedirect, FirebaseAuthTypes, PopupRedirectResolver } from "@react-native-firebase/auth";

import { useAuth } from "./useAuth";
import { SIGN_IN_WITH_REDIRECT_MUTATION_KEY } from "./mutation-keys";
import { ReactNativeFirebase } from "@react-native-firebase/app";

export type UseSignInWitRedirectMutationVariables = {
    authProvider: FirebaseAuthTypes.AuthProvider;
    popupRedirectResolver?: PopupRedirectResolver;
};

/**
 * Custom hook for handling Firebase authentication using sign-in with redirect functionality.
 * This hook utilizes the `useMutation` mechanism to perform the sign-in operation.
 * @param {Omit<UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, UseSignInWitRedirectMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.
 * @returns {UseMutationResult<void, ReactNativeFirebase.NativeFirebaseError, UseSignInWitRedirectMutationVariables, TContext>} The result object from the useMutation hook, containing the mutation function and its current state.
 */
export const useSignInWitRedirectMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<
            void,
            ReactNativeFirebase.NativeFirebaseError,
            UseSignInWitRedirectMutationVariables,
            TContext
        >,
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
