import { setAnalyticsCollectionEnabled } from "firebase/analytics";
import { useAnalytics } from "./useAnalytics";
import { useEffect } from "react";

type UseSetAnalyticsCollectionEnabledOptions = {
    enabled?: boolean;
};

/**
 * Custom hook to enable or disable analytics collection
 * @param {Object}  options - The options for hook.
 * @param {string}  options.enabled - Flag that identifies if analytics collection is enabled.
 */
export const useSetAnalyticsCollectionEnabled = ({ enabled = false }: UseSetAnalyticsCollectionEnabledOptions) => {
    const analytics = useAnalytics();

    useEffect(() => {
        if (analytics) {
            setAnalyticsCollectionEnabled(analytics, enabled);
        }
    }, [analytics, enabled]);
};
