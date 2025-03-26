import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { updateProfile, FirebaseAuthTypes } from "@react-native-firebase/auth";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { CREATE_USER_WITH_EMAIL_AND_PASSWORD_MUTATION_KEY } from "./mutation-keys";

export type UseUpdateProfileMutationVariables = {
    displayName?: string;
    user: FirebaseAuthTypes.User;
};

/**
 * Custom hook to manage the mutation for updating a user's profile.
 * Utilizes Firebase for updating the user's display name.
 *
 * @param {Omit<UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, UseUpdateProfileMutationVariables, TContext>, "mutationKey" | "mutationFn">} options - Configuration options for the mutation, excluding mutationKey and mutationFn.
 * @returns {UseMutationResult<void, ReactNativeFirebase.NativeFirebaseError, UseUpdateProfileMutationVariables, TContext>} The result of the mutation operation including statuses, data, and error information.
 */
export const useUpdateProfileMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, UseUpdateProfileMutationVariables, TContext>,
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
