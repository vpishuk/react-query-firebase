import { useContext, Context } from "react";

import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

export const useAuth = () => {
    const { auth } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return auth;
};
