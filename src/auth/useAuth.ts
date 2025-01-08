import { useContext } from "react";

import { FirebaseContext } from "../context/FirebaseContext";

/**
 * Custom hook to retrieve the authentication object from the Firebase context.
 * @returns {Auth} The authentication object from the Firebase context.
 */
export const useAuth = () => {
    const { auth } = useContext(FirebaseContext);
    return auth;
};
