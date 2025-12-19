import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { FirebaseAuthTypes, signInWithCustomToken } from "@react-native-firebase/auth";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useAuth } from "./useAuth.js";
import { SIGN_IN_ANONYMOUSLY_MUTATION_KEY } from "./mutation-keys.js";

/**
 * @inline
 */
export type UseSignInWithCustomTokenMutationOptions = {
    /**
     * Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
     */
    options?: Omit<
        UseMutationOptions<
            FirebaseAuthTypes.UserCredential,
            ReactNativeFirebase.NativeFirebaseError,
            { customToken: string }
        >,
        "mutationFn"
    >;
};

/**
 * Executes a mutation and returns users credentials
 *
 * @group Hook
 *
 * @param {useSignInWithCustomTokenMutation} options - Configuration options for the mutation.
 *
 * @returns {UseMutationResult<AppModelType, Error, UseAddDocMutationValues<AppModelType>, TContext>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useSignInWithCustomTokenMutation({
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
export const useSignInWithCustomTokenMutation = ({ options = {} }: UseSignInWithCustomTokenMutationOptions = {}) => {
    const firebaseAuth = useAuth();

    return useMutation({
        ...options,
        mutationKey: SIGN_IN_ANONYMOUSLY_MUTATION_KEY,
        mutationFn: async ({ customToken }) => signInWithCustomToken(firebaseAuth, customToken)
    });
};
