import { useEffect } from "react";
import { onMessage } from "@react-native-firebase/messaging";
import { useMessaging } from "./useMessaging.js";

/**
 * Custom hook to start listening for push notifications.
 */
export const useOnMessageHandler = ({ callback }: { callback: <T>(value: T) => unknown }) => {
    const messaging = useMessaging();

    useEffect(() => {
        const unsubscribe = onMessage(messaging, callback);
        return () => {
            unsubscribe();
        };
    }, [messaging, callback]);
};
