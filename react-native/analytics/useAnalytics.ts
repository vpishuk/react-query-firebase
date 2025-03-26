import { useContext } from "react";

import { FirebaseContext } from "../context/FirebaseContext";

/**
 * Hook to access Firebase analytics from the Firebase context.
 * @returns {any} The analytics object from the Firebase context.
 */
export const useAnalytics = () => {
    const { analytics } = useContext(FirebaseContext);
    return analytics;
};
