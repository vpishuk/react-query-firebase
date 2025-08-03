import { onAuthStateChanged } from "@react-native-firebase/auth";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";

/**
 * Hook that provides the current authenticated user from Firebase Auth.
 * It listens for changes in the authentication state and updates the user accordingly.
 * @returns {Object|null} The current authenticated user object or null if no user is authenticated.
 */
export const useCurrentUser = () => {
    const firebaseAuth = useAuth();

    const [currentUser, setCurrentUser] = useState(firebaseAuth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setCurrentUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, [firebaseAuth]);

    return currentUser;
};
