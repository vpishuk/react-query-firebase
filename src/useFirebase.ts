import { Context, useContext } from "react";

import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

/**
 * Custom hook to access the Firebase instance from the Firebase context.
 * @returns {Firebase} The Firebase instance obtained from FirebaseContext.
 */
export const useFirebase = () => {
    const { firebase } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return firebase;
};
