import { getValue } from "firebase/remote-config";
import { useRemoteConfig } from "../useRemoteConfig";
import { useMemo } from "react";

export const useGetValue = (key: string) => {
    const remoteConfig = useRemoteConfig();
    return useMemo(() => {
        return remoteConfig ? getValue(remoteConfig, key) : null;
    }, [remoteConfig?.lastFetchStatus, key]);
};
