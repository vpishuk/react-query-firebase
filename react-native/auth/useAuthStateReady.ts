import { onAuthStateChanged } from "@react-native-firebase/auth";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";

/**
 * A custom hook that determines if the Firebase authentication state is ready.
 * It uses Firebase authentication to check if the auth state is ready and updates the state accordingly.
 *
 * @group Hook
 *
 * @returns {boolean}
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const isAuthStateReady = useAuthStateReady();
 *  console.log(isAuthStateReady);
 * };
 * ```
 */
export const useAuthStateReady = () => {
    const firebaseAuth = useAuth();

    const [isAuthStateReady, setIsAuthStateReady] = useState(false);

    useEffect(() => {
        const subscription = onAuthStateChanged(firebaseAuth, () => {
            if (!isAuthStateReady) {
                setIsAuthStateReady(true);
            }
        });

        return () => {
            subscription();
        };
    }, [firebaseAuth, isAuthStateReady]);

    return isAuthStateReady;
};
