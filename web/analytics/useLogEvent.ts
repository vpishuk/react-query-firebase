import { logEvent } from "firebase/analytics";
import { useAnalytics } from "./useAnalytics";
import { useCallback, useMemo } from "react";

type UseLogEventOptions = {
    eventName: string;
    eventParams?: {
        [key: string]: unknown;
    };
};

/**
 * Custom hook to create a log event function that logs an analytics event with specified parameters.
 * @param {Object}  options - The options for the log event.
 * @param {string}  options.eventName - The name of the event to be logged.
 * @param {Object}  options.eventParams - The parameters to be sent along with the event.
 * @returns {Object} An object containing a `logEvent` function that, when called, logs the event.
 */
export const useLogEvent = ({ eventName, eventParams }: UseLogEventOptions) => {
    const analytics = useAnalytics();

    const logEventCallback = useCallback(() => {
        if (analytics) {
            logEvent(analytics, eventName, eventParams);
        }
    }, [eventName, eventParams, analytics]);

    return useMemo(
        () => ({
            logEvent: logEventCallback
        }),
        [logEventCallback]
    );
};
