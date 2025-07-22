import { AppleAuthProvider, FirebaseAuthTypes } from "@react-native-firebase/auth";
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
    return useCallback((credential: Credential): FirebaseAuthTypes.AuthCredential => {
        return AppleAuthProvider.credential(credential.token, credential.nonce);
    }, []);
};
