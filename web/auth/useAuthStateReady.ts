import { useAuth } from "./useAuth";
import { useCallback, useEffect, useState } from "react";

/**
 * A custom hook that determines if the Firebase authentication state is ready.
 * It uses Firebase authentication to check if the auth state is ready and updates the state accordingly.
 * @returns {boolean} Indicates whether the authentication state is ready.
 */
export const useAuthStateReady = () => {
    const firebaseAuth = useAuth();

    const [isAuthStateReady, setIsAuthStateReady] = useState(false);

    const callback = useCallback(async () => {
        await firebaseAuth.authStateReady();
        setIsAuthStateReady(true);
    }, [firebaseAuth]);

    useEffect(() => {
        callback();
    }, [callback]);

    return isAuthStateReady;
};
