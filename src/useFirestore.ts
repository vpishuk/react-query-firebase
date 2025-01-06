import { Context, useContext } from "react";
import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

export const useFirestore = () => {
    const { firestore } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return firestore;
};
