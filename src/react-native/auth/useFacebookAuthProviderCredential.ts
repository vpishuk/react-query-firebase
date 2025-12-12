import { FacebookAuthProvider, FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useCallback } from "react";

type Credential = {
    token: string;
    nonce?: string;
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
 *  const getCredential = useFacebookAuthProviderCredential();
 *  // ...
 *  getCredential({token, nonce})
 * };
 * ```
 */

export const useFacebookAuthProviderCredential = () => {
    return useCallback((credential: Credential): FirebaseAuthTypes.AuthCredential => {
        return FacebookAuthProvider.credential(credential.token, credential.nonce);
    }, []);
};
