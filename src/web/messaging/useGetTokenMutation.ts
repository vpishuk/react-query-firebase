import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { getToken } from "firebase/messaging";

import { FirebaseError } from "firebase/app";
import { useMessaging } from "./useMessaging.js";
/**
 * @inline
 */
export type UseGetTokenMutationValues = {
    /**
     * API key
     */
    vapidKey: string;
};

/**
 * @inline
 */
export type UseGetTokenMutationOptions<TContext = unknown> = {
    /**
     * Options for useMutation hook excluding mutationFn.
     */
    options?: Omit<
        UseMutationOptions<{ token: string }, FirebaseError, UseGetTokenMutationValues, TContext>,
        "mutationFn"
    >;
};

/**
 * Executes a mutation and returns token for.current instance
 *
 * @group Hook
 *
 * @param {UseGetTokenMutationOptions} options - Configuration options for the mutation.
 *
 * @returns {UseMutationResult<{token: string;}, FirebaseError, UseGetTokenMutationValues, TContext>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useGetTokenMutation({
 *      options: {
 *      },
 *  });
 *
 *  // ....
 *  mutate({vapidKey: 'key'});
 *  // ....
 * };
 * ```
 */
export const useGetTokenMutation = ({ options = {} }: UseGetTokenMutationOptions) => {
    const messaging = useMessaging();

    return useMutation({
        mutationKey: ["GET_MESSAGING_TOKEN_MUTATION"],
        ...options,
        mutationFn: async ({ vapidKey }) => {
            const token = await getToken(messaging, { vapidKey: vapidKey });
            return { token };
        }
    });
};
