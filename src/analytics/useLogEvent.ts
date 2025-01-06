import { logEvent } from "firebase/analytics";
import { useAnalytics } from "../useAnalytics";
import { useCallback, useMemo } from "react";

type UseLogEventOptions = {
    eventName: string;
    eventParams?: {
        [key: string]: unknown;
    };
};

export const useLogEvent = ({ eventName, eventParams }: UseLogEventOptions) => {
    const analytics = useAnalytics();

    const logEventCallback = useCallback(() => {
        if (analytics) {
            logEvent(analytics, eventName, eventParams);
        }
    }, [eventName, eventParams]);

    return useMemo(
        () => ({
            logEvent: logEventCallback
        }),
        [logEventCallback]
    );
};
