import { Context, useContext } from "react";
import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

/**
 * Hook to access the Firebase Remote Config instance from the context.
 * @returns {RemoteConfig} The remoteConfig object from the Firebase context.
 */
export const useRemoteConfig = () => {
    const { remoteConfig } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return remoteConfig;
};
