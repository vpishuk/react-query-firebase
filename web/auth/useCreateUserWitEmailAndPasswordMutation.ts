import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useAuth } from "./useAuth";
import { FirebaseError } from "firebase/app";
import { CREATE_USER_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY } from "./mutation-keys";

export type UseCreateUserWitEmailAndPasswordMutationVariables = {
    email: string;
    password: string;
};

/**
 * Custom hook to initiate a user creation process using email and password with Firebase authentication.
 * This hook utilizes the `useMutation` functionality to support creating new user credentials asynchronously.
 *
 * @param {Omit<UseMutationOptions<UserCredential, FirebaseError, UseCreateUserWitEmailAndPasswordMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Optional settings to customize the mutation behavior, excluding `mutationKey` and `mutationFn`.
 * @returns {UseMutationResult<UserCredential, FirebaseError, UseCreateUserWitEmailAndPasswordMutationVariables, TContext>} The result of the mutation which includes status, user credentials, and error information if any.
 */
export const useCreateUserWitEmailAndPasswordMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<UserCredential, FirebaseError, UseCreateUserWitEmailAndPasswordMutationVariables, TContext>,
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
