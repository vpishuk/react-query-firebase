import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

import { useAuth } from "../useAuth";
import { SIGN_IN_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseSignInWitEmailAndPasswordMutationVariables = {
    email: string;
    password: string;
};

export const useSignInWitEmailAndPasswordMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<UserCredential, FirebaseError, UseSignInWitEmailAndPasswordMutationVariables, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    const firebaseAuth = useAuth();

    return useMutation({
        ...options,
        mutationFn: async ({ email, password }: UseSignInWitEmailAndPasswordMutationVariables) =>
            signInWithEmailAndPassword(firebaseAuth, email, password),
        mutationKey: SIGN_IN_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY
    });
};
