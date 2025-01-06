import { Context, useContext } from "react";

import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

export const useFirebase = () => {
    const { firebase } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return firebase;
};
