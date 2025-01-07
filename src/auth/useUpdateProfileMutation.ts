import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { updateProfile, User } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { CREATE_USER_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY } from "./mutation-keys";

export type UseUpdateProfileMutationVariables = {
    displayName?: string;
    user: User;
};

/**
 * Custom hook to manage the mutation for updating a user's profile.
 * Utilizes Firebase for updating the user's display name.
 *
 * @param {Omit<UseMutationOptions<void, FirebaseError, UseUpdateProfileMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Configuration options for the mutation, excluding mutationKey and mutationFn.
 * @returns {UseMutationResult<void, FirebaseError, UseUpdateProfileMutationVariables, TContext>} The result of the mutation operation including statuses, data, and error information.
 */
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
