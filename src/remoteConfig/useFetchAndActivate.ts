import { useRemoteConfig } from "../useRemoteConfig";
import { ensureInitialized, fetchAndActivate } from "firebase/remote-config";
import { useCallback, useMemo, useState } from "react";

export const useFetchAndActivate = () => {
    const remoteConfig = useRemoteConfig();
    const [isFetched, setIsFetched] = useState(false);

    const fetchAndActivateCallback = useCallback(async () => {
        try {
            await ensureInitialized(remoteConfig);
            await fetchAndActivate(remoteConfig);
            setIsFetched(true);
        } catch (e) {
            setIsFetched(true);
            console.log(`Cannot read remote config: ${(e as Error)?.message}`);
        }
    }, [isFetched]);

    return useMemo(
        () => ({
            fetchAndActivate: fetchAndActivateCallback,
            isFetched
        }),
        [isFetched, fetchAndActivateCallback]
    );
};
