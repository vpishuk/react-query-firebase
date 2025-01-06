import { Context, useContext } from "react";

import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

export const useAnalytics = () => {
    const { analytics } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return analytics;
};
