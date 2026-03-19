import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext.js";

/**
 * Returns an instance of firestore bound to the closest context.
 *
 * @group Hook
 *
 * @returns {Messaging}
 */
export const useMessaging = () => {
    const { messaging } = useContext(FirebaseContext);
    return messaging;
};
