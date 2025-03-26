import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useAuth } from "./useAuth";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { CREATE_USER_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY } from "./mutation-keys";

export type UseCreateUserWitEmailAndPasswordMutationVariables = {
    email: string;
    password: string;
};

/**
 * Custom hook to initiate a user creation process using email and password with Firebase authentication.
 * This hook utilizes the `useMutation` functionality to support creating new user credentials asynchronously.
 *
 * @param {Omit<UseMutationOptions<FirebaseAuthTypes.UserCredential, ReactNativeFirebase.NativeFirebaseError, UseCreateUserWitEmailAndPasswordMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional settings to customize the mutation behavior, excluding `mutationKey` and `mutationFn`.
 * @returns {UseMutationResult<FirebaseAuthTypes.UserCredential, ReactNativeFirebase.NativeFirebaseError, UseCreateUserWitEmailAndPasswordMutationVariables, TContext>} The result of the mutation which includes status, user credentials, and error information if any.
 */
export const useCreateUserWitEmailAndPasswordMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<
            FirebaseAuthTypes.UserCredential,
            ReactNativeFirebase.NativeFirebaseError,
            UseCreateUserWitEmailAndPasswordMutationVariables,
            TContext
        >,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    const firebaseAuth = useAuth();

    return useMutation({
        ...options,
        mutationFn: async ({ email, password }: UseCreateUserWitEmailAndPasswordMutationVariables) =>
            await createUserWithEmailAndPassword(firebaseAuth, email, password),
        mutationKey: CREATE_USER_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY
    });
};
