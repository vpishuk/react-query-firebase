import { EmailAuthProvider, FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useCallback } from "react";

type Credential = {
    email: string;
    password?: string;
    emailLink?: string;
};

/**
 * A custom hook that returns an auth credential for email.
 *
 * @group Hook
 * @param {AuthProvider} provider alas of a provider
 *
 * @returns {AuthCredential}
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const getCredential = useEmailAuthProviderCredential();
 *  // ...
 *  getCredential({email, password})
 * };
 * ```
 */

export const useEmailAuthProviderCredential = () => {
    return useCallback((credential: Credential): FirebaseAuthTypes.AuthCredential => {
        if (credential.password) {
            return EmailAuthProvider.credential(credential.email, credential.password);
        }
        if (credential.emailLink) {
            return EmailAuthProvider.credentialWithLink(credential.email, credential.emailLink);
        }
        throw new Error("One of: password or emailLink must be provided");
    }, []);
};
