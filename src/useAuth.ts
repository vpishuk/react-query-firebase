import { useContext, Context } from "react";

import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

/**
 * Custom hook to retrieve the authentication object from the Firebase context.
 * @returns {Auth} The authentication object from the Firebase context.
 */
export const useAuth = () => {
    const { auth } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return auth;
};
