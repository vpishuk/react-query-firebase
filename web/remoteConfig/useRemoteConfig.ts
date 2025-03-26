import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

/**
 * Hook to access the Firebase Remote Config instance from the context.
 * @returns {RemoteConfig} The remoteConfig object from the Firebase context.
 */
export const useRemoteConfig = () => {
    const { remoteConfig } = useContext(FirebaseContext);
    return remoteConfig;
};
