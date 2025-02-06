import { useCallback, useEffect, useState } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { onIdTokenChanged } from "firebase/auth";
import { useAuth } from "./useAuth";

/**
 * Custom hook to manage an ID token for the current user.
 * This hook provides an `idToken` value and a `refresh` function to manually refresh the token.
 *
 * @returns {Object} An object containing:
 *   @returns {string} idToken - The current ID token for the user.
 *   @returns {Function} refresh - A function to refresh the ID token.
 */
export const useIdToken = () => {
    const auth = useAuth();

    const currentUser = useCurrentUser();
    const [idToken, setIdToken] = useState("");

    const callback = useCallback(async () => {
        if (!currentUser) {
            setIdToken("");
            return;
        }

        const idToken = await currentUser.getIdToken();
        setIdToken(idToken);
    }, [currentUser, idToken]);

    const refresh = useCallback(async () => {
        if (!currentUser) {
            return;
        }

        const idToken = await currentUser.getIdToken(true);
        setIdToken(idToken);
    }, [currentUser, idToken]);

    useEffect(() => {
        callback();
    }, [currentUser?.uid ?? ""]);

    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, (user) => {
            if (user) {
                user.getIdToken().then((idToken) => {
                    setIdToken(idToken);
                });
            } else {
                setIdToken("");
            }
        });

        return () => unsubscribe();
    }, [idToken]);

    return {
        idToken,
        refresh
    };
};
