import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

/**
 * Returns an instance of firestore bound to the closest context.
 *
 * @group Hook
 *
 * @returns {Firestore}
 */
export const useFirestore = () => {
    const { firestore } = useContext(FirebaseContext);
    return firestore;
};
