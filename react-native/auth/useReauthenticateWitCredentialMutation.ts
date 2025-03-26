import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { reauthenticateWithCredential, FirebaseAuthTypes } from "@react-native-firebase/auth";
import { REAUTHENTICATE_WITH_CREDENTIAL_MUTATION_KEY } from "./mutation-keys";
import { ReactNativeFirebase } from "@react-native-firebase/app";

export type UseReauthenticateWitCredentialMutationVariables = {
    credential: FirebaseAuthTypes.AuthCredential;
    user: FirebaseAuthTypes.User;
};

/**
 * Custom hook to create a mutation for re-authenticating a user with a given credential.
 * This hook utilizes useMutation from React Query to manage the asynchronous re-authentication
 * process with Firebase credentials. It omits the default "mutationKey" and "mutationFn" options.
 *
 * @param {Omit<UseMutationOptions<FirebaseAuthTypes.UserCredential, ReactNativeFirebase.NativeFirebaseError, UseReauthenticateWitCredentialMutationVariables, TContext>, "mutationKey" | "mutationFn">}  options - Optional mutation options excluding "mutationKey" and "mutationFn".
 * @returns {UseMutationResult<FirebaseAuthTypes.UserCredential, ReactNativeFirebase.NativeFirebaseError, UseReauthenticateWitCredentialMutationVariables, TContext>} A useMutation result object managing the loading, error, and result state of the re-authentication mutation.
 */
export const useReauthenticateWitCredentialMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<
            FirebaseAuthTypes.UserCredential,
            ReactNativeFirebase.NativeFirebaseError,
            UseReauthenticateWitCredentialMutationVariables,
            TContext
        >,
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
