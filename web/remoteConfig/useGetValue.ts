import { getValue } from "firebase/remote-config";
import { useRemoteConfig } from "./useRemoteConfig";
import { useMemo } from "react";

/**
 * Custom hook to retrieve a value associated with a specified key from remote configuration.
 * Utilizes memoization to optimize performance by recalculating the result only if dependencies change.
 * @param {string} key - The key for which the corresponding value is to be fetched from the remote configuration.
 * @returns {any | null} The value associated with the specified key if available, otherwise null.
 */
export const useGetValue = (key: string) => {
    const remoteConfig = useRemoteConfig();
    return useMemo(() => {
        return remoteConfig ? getValue(remoteConfig, key) : null;
    }, [key, remoteConfig]);
};
