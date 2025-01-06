import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { sendEmailVerification, User } from "firebase/auth";

import { SEND_EMAIL_VERIFICATION_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseSendEmailVerificationMutationVariables = {
    user: User;
};

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
