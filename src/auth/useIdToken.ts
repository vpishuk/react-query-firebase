import { useCallback, useEffect, useState } from "react";
import { useCurrentUser } from "./useCurrentUser";

/**
 * Custom hook to manage an ID token for the current user.
 * This hook provides an `idToken` value and a `refresh` function to manually refresh the token.
 *
 * @returns {Object} An object containing:
 *   @returns {string} idToken - The current ID token for the user.
 *   @returns {Function} refresh - A function to refresh the ID token.
 */
export const useIdToken = () => {
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

    return {
        idToken,
        refresh
    };
};
