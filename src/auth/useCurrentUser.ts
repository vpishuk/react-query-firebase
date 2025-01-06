import { useAuth } from "../useAuth";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
    const firebaseAuth = useAuth();

    const [currentUser, setCurrentUser] = useState(firebaseAuth.currentUser);

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, [currentUser?.uid ?? ""]);

    return currentUser;
};
