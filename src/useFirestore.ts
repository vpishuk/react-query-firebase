import { Context, useContext } from "react";
import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

/**
 * Provides a hook to access the Firestore instance from the Firebase context.
 * It extracts the Firestore object from the Firebase context, allowing components to interact with Firestore services.
 *
 * @returns {firestore.Firestore} The Firestore instance from the Firebase context.
 */
export const useFirestore = () => {
    const { firestore } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return firestore;
};
