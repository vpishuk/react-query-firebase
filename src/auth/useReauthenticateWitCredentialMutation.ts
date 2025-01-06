import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { reauthenticateWithCredential, User, AuthCredential, UserCredential } from "firebase/auth";
import { REAUTHENTICATE_WITH_CREDENTIAL_MUTATION_KEY } from "./mutation-keys";
import { FirebaseError } from "firebase/app";

export type UseReauthenticateWitCredentialMutationVariables = {
    credential: AuthCredential;
    user: User;
};

export const useReauthenticateWitCredentialMutation = <TContext = unknown>(
    options: Omit<
        UseMutationOptions<UserCredential, FirebaseError, UseReauthenticateWitCredentialMutationVariables, TContext>,
        "mutationKey" | "mutationFn"
    > = {}
) => {
    return useMutation({
        ...options,
        mutationFn: async ({ credential, user }: UseReauthenticateWitCredentialMutationVariables) =>
            reauthenticateWithCredential(user, credential),
        mutationKey: REAUTHENTICATE_WITH_CREDENTIAL_MUTATION_KEY
    });
};
