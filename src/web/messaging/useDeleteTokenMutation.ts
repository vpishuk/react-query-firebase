import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { deleteToken } from "firebase/messaging";

import { FirebaseError } from "firebase/app";
import { useMessaging } from "./useMessaging.js";
/**
 * @inline
 */
export type UseDeleteTokenMutationOptions<TContext = unknown> = {
    /**
     * Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
     */
    options?: Omit<UseMutationOptions<void, FirebaseError, void, TContext>, "mutationFn">;
};

/**
 * Executes a mutation and deletes token for push notifications
 *
 * @group Hook
 *
 * @param {UseDeleteTokenMutationOptions} options - Configuration options for the mutation.
 *
 * @returns {UseMutationResult<void, FirebaseError, void, TContext>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useDeleteTokenMutation({
 *      options: {
 *      },
 *  });
 *
 *  // ....
 *  mutate();
 *  // ....
 * };
 * ```
 */
export const useDeleteTokenMutation = ({ options = {} }: UseDeleteTokenMutationOptions) => {
    const messaging = useMessaging();

    return useMutation({
        mutationKey: ["GET_MESSAGING_TOKEN_MUTATION"],
        ...options,
        mutationFn: async () => {
            await deleteToken(messaging);
        }
    });
};
