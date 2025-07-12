import {
    EmailAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    TwitterAuthProvider
} from "firebase/auth";
import { useMemo } from "react";

type AuthProvider = "google" | "facebook" | "email" | "github" | "twitter";

/**
 * A custom hook that returns an auth provider by id.
 *
 * @group Hook
 * @param {AuthProvider} provider alas of a provider
 *
 * @returns {AuthProvider}
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const authProvider = useAuthProvider('email');
 * };
 * ```
 */

export const useAuthProvider = (provider: AuthProvider) => {
    return useMemo(() => {
        switch (provider) {
            case "google":
                return new GoogleAuthProvider();
            case "email":
                return new EmailAuthProvider();
            case "facebook":
                return new FacebookAuthProvider();
            case "github":
                return new GithubAuthProvider();
            case "twitter":
                return new TwitterAuthProvider();
            default:
                throw new Error(`Auth provider ${provider} is not supported.`);
        }
    }, [provider]);
};
