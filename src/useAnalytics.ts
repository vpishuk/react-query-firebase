import { Context, useContext } from "react";

import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

/**
 * Hook to access Firebase analytics from the Firebase context.
 * @returns {any} The analytics object from the Firebase context.
 */
export const useAnalytics = () => {
    const { analytics } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return analytics;
};
