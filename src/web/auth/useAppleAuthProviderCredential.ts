import { AuthCredential, OAuthProvider } from "firebase/auth";
import { useCallback } from "react";

type Credential = {
    token: string;
    nonce: string;
};

/**
 * A custom hook that returns an auth credential for facebook.
 *
 * @group Hook
 * @param {AuthProvider} provider alas of a provider
 *
 * @returns {AuthCredential}
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const getCredential = useAppleAuthProviderCredential();
 *  // ...
 *  getCredential({token, nonce: ''})
 * };
 * ```
 */

export const useAppleAuthProviderCredential = () => {
    return useCallback((credential: Credential): AuthCredential => {
        const authProvider = new OAuthProvider("apple.com");
        return authProvider.credential({ accessToken: credential.token, rawNonce: credential.nonce });
    }, []);
};
