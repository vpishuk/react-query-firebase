import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { signInAnonymously, UserCredential } from "firebase/auth";

import { useAuth } from "./useAuth";
import { SIGN_IN_ANONYMOUSLY_MUTATION_KEY } from "./mutation-keys";
import { ReactNativeFirebase } from "@react-native-firebase/app";

/**
 * @inline
 */
export type UseSignInAnonymouslyMutationOptions = {
    /**
     * Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
     */
    options?: Omit<UseMutationOptions<UserCredential, ReactNativeFirebase.NativeFirebaseError, void>, "mutationFn">;
};

/**
 * Executes a mutation and returns users credentials
 *
 * @group Hook
 *
 * @param {useSignInAnonymouslyMutation} options - Configuration options for the mutation.
 *
 * @returns {UseMutationResult<AppModelType, Error, UseAddDocMutationValues<AppModelType>, TContext>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useSignInAnonymouslyMutation({
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
export const useSignInAnonymouslyMutation = ({ options = {} }: UseSignInAnonymouslyMutationOptions = {}) => {
    const firebaseAuth = useAuth();

    return useMutation({
        ...options,
        mutationKey: SIGN_IN_ANONYMOUSLY_MUTATION_KEY,
        mutationFn: async () => signInAnonymously(firebaseAuth)
    });
};
