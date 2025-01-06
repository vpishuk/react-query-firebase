import { useAuth } from "../useAuth";
import { useCallback, useEffect, useState } from "react";

export const useAuthStateReady = () => {
    const firebaseAuth = useAuth();

    const [isAuthStateReady, setIsAuthStateReady] = useState(false);

    const callback = useCallback(async () => {
        await firebaseAuth.authStateReady();
        setIsAuthStateReady(true);
    }, [isAuthStateReady]);

    useEffect(() => {
        callback();
    }, [callback]);

    return isAuthStateReady;
};
