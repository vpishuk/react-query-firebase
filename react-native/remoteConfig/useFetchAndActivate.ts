import { useRemoteConfig } from "./useRemoteConfig";
import { ensureInitialized, fetchAndActivate } from "@react-native-firebase/remote-config";
import { useCallback, useMemo, useState } from "react";

/**
 * Custom hook to fetch and activate remote configuration settings.
 * Initializes remote configuration, fetches, activates it, and tracks the fetch status.
 * @returns {Object} An object containing:
 * - {Function} fetchAndActivate - Callback function to fetch and activate remote configuration.
 * - {Boolean} isFetched - Boolean representing whether the fetch-and-activate process completed.
 */
export const useFetchAndActivate = () => {
    const remoteConfig = useRemoteConfig();
    const [isFetched, setIsFetched] = useState(false);

    const fetchAndActivateCallback = useCallback(async () => {
        try {
            if (remoteConfig) {
                await ensureInitialized(remoteConfig);
                await fetchAndActivate(remoteConfig);
                setIsFetched(true);
            }
        } catch (e) {
            setIsFetched(true);
            console.log(`Cannot read remote config: ${(e as Error)?.message}`);
        }
    }, [remoteConfig]);

    return useMemo(
        () => ({
            fetchAndActivate: fetchAndActivateCallback,
            isFetched
        }),
        [isFetched, fetchAndActivateCallback]
    );
};
