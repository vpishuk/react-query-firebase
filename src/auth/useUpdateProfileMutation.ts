import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { updateProfile, User } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { CREATE_USER_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY } from "./mutation-keys";

export type UseUpdateProfileMutationVariables = {
    displayName?: string;
    user: User;
};

export const useUpdateProfileMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<void, FirebaseError, UseUpdateProfileMutationVariables, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    return useMutation({
        ...options,
        mutationFn: async ({ displayName, user }: UseUpdateProfileMutationVariables) =>
            await updateProfile(user, { displayName }),
        mutationKey: CREATE_USER_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY
    });
};
