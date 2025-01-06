import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { signOut } from "firebase/auth";

import { SIGN_OUT_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";
import { useAuth } from "../useAuth";

export const useSignOutMutation = <TContext = unknown>(
    options: Omit<UseMutationOptions<void, FirebaseError, void, TContext>, "queryKey" | "queryFn"> = {}
) => {
    const firebaseAuth = useAuth();

    return useMutation({
        ...options,
        mutationFn: async () => await signOut(firebaseAuth),
        mutationKey: SIGN_OUT_MUTATION_KEY
    });
};
