import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useAuth } from "../useAuth";
import { FirebaseError } from "firebase/app";
import { CREATE_USER_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY } from "./mutation-keys";

export type UseCreateUserWitEmailAndPasswordMutationVariables = {
    email: string;
    password: string;
};

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
