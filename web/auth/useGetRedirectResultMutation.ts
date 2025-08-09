import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { GET_REDIRECT_RESULT_MUTATION_KEY } from "./mutation-keys";
import { getRedirectResult, UserCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";

/**
 * Custom hook to retrieve redirect result after sign in with redirect.
 * This hook utilizes the `useMutation` functionality to support creating new user credentials asynchronously.
 *
 * @param {Omit<UseMutationOptions<UserCredential, FirebaseError, void, TContext>, "mutationKey" | "mutationFn">} options - Optional settings to customize the mutation behavior, excluding `mutationKey` and `mutationFn`.
 * @returns {UseMutationResult<UserCredential, FirebaseError, void, TContext>} The result of the mutation which includes status, user credentials, and error information if any.
 */
export const useGetRedirectResultMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<UserCredential | null, FirebaseError, void, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    const firebaseAuth = useAuth();

    return useMutation({
        ...options,
        mutationFn: async () => await getRedirectResult(firebaseAuth),
        mutationKey: GET_REDIRECT_RESULT_MUTATION_KEY
    });
};
