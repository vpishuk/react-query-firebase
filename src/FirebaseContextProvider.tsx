import React, { PropsWithChildren, useMemo } from "react";
import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig, RemoteConfigSettings } from "firebase/remote-config";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { FirebaseOptions, initializeApp } from "firebase/app";

type FirestorEmulatorConfig = {
    host: string;
    port: number;
};

type AuthEmulatorConfig = {
    host: string;
};

type Emulators = {
    firestore?: FirestorEmulatorConfig;
    auth?: AuthEmulatorConfig;
};

type FirebaseContextProvider = PropsWithChildren & {
    emulators?: Emulators;
    options: FirebaseOptions;
    authEnabled?: boolean;
    analyticsEnabled?: boolean;
    firestoreEnabled?: boolean;
    remoteConfigSettings?: RemoteConfigSettings;
    remoteConfigDefaults?: { [key: string]: string | number | boolean };
    remoteConfigEnabled?: boolean;
};

export const FirebaseContextProvider: React.FC<FirebaseContextProvider> = ({
    emulators,
    options,
    children,
    authEnabled = true,
    firestoreEnabled = true,
    analyticsEnabled = true,
    remoteConfigEnabled = true,
    remoteConfigSettings,
    remoteConfigDefaults = {}
}) => {
    const firebase = useMemo(() => {
        return initializeApp(options);
    }, [options]);

    const contextValue = useMemo(() => {
        const value: Partial<FirebaseContextValue> = {};

        if (firestoreEnabled) {
            const firestore = getFirestore(firebase);

            if (emulators?.firestore?.host && emulators?.firestore?.port) {
                connectFirestoreEmulator(firestore, emulators.firestore.host, emulators.firestore.port);
            }

            value.firestore = firestore;
        }

        if (authEnabled) {
            const auth = getAuth(firebase);
            if (emulators?.auth?.host) {
                connectAuthEmulator(auth, emulators?.auth?.host, {
                    disableWarnings: true
                });
            }
            value.auth = auth;
        }

        if (analyticsEnabled && options.measurementId && typeof window !== "undefined") {
            const analytics = getAnalytics(firebase);
            value.analytics = analytics;
        }

        if (remoteConfigEnabled && typeof window !== "undefined") {
            const remoteConfig = getRemoteConfig(firebase);
            if (remoteConfigSettings) {
                remoteConfig.settings.fetchTimeoutMillis = remoteConfigSettings.fetchTimeoutMillis;
                remoteConfig.settings.minimumFetchIntervalMillis = remoteConfigSettings.minimumFetchIntervalMillis;
                remoteConfig.defaultConfig = remoteConfigDefaults;
            }
            value.remoteConfig = remoteConfig;
        }

        return { firebase, ...value };
    }, [firebase]);

    return <FirebaseContext.Provider value={contextValue}>{children}</FirebaseContext.Provider>;
};
