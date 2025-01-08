import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { sendEmailVerification, User } from "firebase/auth";

import { SEND_EMAIL_VERIFICATION_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseSendEmailVerificationMutationVariables = {
    user: User;
};

/**
 * A custom hook to create a mutation for sending an email verification to a user using Firebase.
 * This uses the `useMutation` hook from a query library and wraps it with specific configuration options.
 * @param {Omit<UseMutationOptions<void, FirebaseError, UseSendEmailVerificationMutationVariables, TContext>, "queryKey" | "queryFn">} options - Configuration options for the mutation, excluding `queryKey` and `queryFn`.
 * @returns {UseMutationResult<void, FirebaseError, UseSendEmailVerificationMutationVariables, TContext>} An object containing mutation state and functions for managing the mutation lifecycle.
 */
export const useSendEmailVerificationMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<void, FirebaseError, UseSendEmailVerificationMutationVariables, TContext>,
        "queryKey" | "queryFn"
    > = {}
) => {
    return useMutation({
        ...options,
        mutationFn: async ({ user }) => await sendEmailVerification(user),
        mutationKey: SEND_EMAIL_VERIFICATION_MUTATION_KEY
    });
};
