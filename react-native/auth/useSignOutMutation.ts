import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { signOut } from "@react-native-firebase/auth";

import { SIGN_OUT_MUTATION_KEY } from "./mutation-keys";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useAuth } from "./useAuth";

/**
 * Custom hook for handling the sign-out mutation using Firebase authentication.
 * It wraps the useMutation hook to provide a sign-out function with Firebase.
 *
 * @param {Omit<UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, void, TContext>, "queryKey" | "queryFn">} options - Configuration options for the mutation, excluding "queryKey" and "queryFn".
 * @returns {UseMutationResult<void, ReactNativeFirebase.NativeFirebaseError, void, TContext>} A mutation object for handling the sign-out process, including methods for mutating and state tracking.
 */
export const useSignOutMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, void, TContext>,
        "queryKey" | "queryFn"
    > = {}
) => {
    const firebaseAuth = useAuth();

    return useMutation({
        ...options,
        mutationFn: async () => await signOut(firebaseAuth),
        mutationKey: SIGN_OUT_MUTATION_KEY
    });
};
