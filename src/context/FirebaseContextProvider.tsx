import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { ConsentSettings, getAnalytics, setAnalyticsCollectionEnabled, setConsent } from "firebase/analytics";
import { getRemoteConfig, RemoteConfigSettings } from "firebase/remote-config";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { FirebaseOptions, initializeApp } from "firebase/app";

/**
 * @inline
 */
export type FirebaseContextProviderFirestoreEmulatorConfig = {
    /**
     * Host to connect to Firebase Firestore Emulator
     */
    host: string;
    /**
     * Port to connect to Firebase Firestore Emulator
     */
    port: number;
};

/**
 * @inline
 */
export type FirebaseContextProviderAuthEmulatorConfig = {
    /**
     * Host to connect to Firebase Auth Emulator
     */
    host: string;
};

/**
 * @inline
 */
export type FirebaseContextProviderEmulators = {
    /**
     * Defines configuration for Firebase Firestore emulator. Optional.
     */
    firestore?: FirebaseContextProviderFirestoreEmulatorConfig;
    /**
     * Defines configuration for Firebase Auth emulator. Optional
     */
    auth?: FirebaseContextProviderAuthEmulatorConfig;
};

/**
 * @inline
 */
export type FirebaseContextProviderProps = PropsWithChildren & {
    /**
     * Defines configuration for firebase emulators
     */
    emulators?: FirebaseContextProviderEmulators;
    /**
     * Configuration options for Firebase initialization. {@link https://firebase.google.com/docs/web/setup#config-object | Learn about the Firebase config object}
     */
    options: FirebaseOptions;
    /**
     * Flag indicating whether Firebase Auth should be enabled.
     */
    authEnabled?: boolean;
    /**
     * Flag indicating whether Firebase Analytics should be enabled.
     * @defaultValue `true`
     */
    analyticsEnabled?: boolean;
    /**
     * Default user consent settings. Make sure to either use a consent platform or install custom consent form for a certain regions.
     * @defaultValue {
     *                  ad_personalization: "denied",
     *                  ad_storage: "denied",
     *                  ad_user_data: "denied",
     *                  analytics_storage: "denied",
     *                  functionality_storage: "denied",
     *                  personalization_storage: "denied",
     *                  security_storage: "denied"
     *              }
     */
    consentSettings?: ConsentSettings;
    /**
     * Flag indicating whether Firebase Firestore should be enabled.
     * @defaultValue `true`
     */
    firestoreEnabled?: boolean;
    /**
     * Configuration options for Firebase Remote Config Settings. {@link https://firebase.google.com/docs/reference/js/remote-config.remoteconfigsettings | Learn about the Firebase Remote COnfig Settings object}
     * @defaultValue `true`
     */
    remoteConfigSettings?: RemoteConfigSettings;
    /**
     * Configuration options for Firebase Remote Config Defaults.
     */
    remoteConfigDefaults?: { [key: string]: string | number | boolean };
    /**
     * Flag indicating whether Firebase Remote Config should be enabled.
     * @defaultValue `true`
     */
    remoteConfigEnabled?: boolean;
};

/**
 * FirebaseContextProvider component configures and provides Firebase services to its children.
 * Initializes Firebase app and enables optional Firebase services such as Firestore, Auth, Analytics,
 * and Remote Config based on the provided configuration and parameters.
 *
 * @group Component
 *
 * @param {FirebaseContextProviderProps} props
 *
 * @returns {FirebaseContextProvider<FirebaseContextProviderProps>}
 *
 * @example
 * ```jsx
 * const firebaseConfig = {};
 * export const App = () => {
 *  return (
 *      <FirebaseContextProvider options={firebaseConfig}>
 *          <ChildComponent />
 *      </FirebaseContextProvider>
 *  );
 * };
 * ```
 */
export const FirebaseContextProvider: React.FC<FirebaseContextProviderProps> = ({
    emulators,
    options,
    children,
    authEnabled = true,
    firestoreEnabled = true,
    analyticsEnabled = true,
    consentSettings = {},
    remoteConfigEnabled = true,
    remoteConfigSettings,
    remoteConfigDefaults = {}
}) => {
    const firebase = useMemo(() => {
        return initializeApp(options);
    }, [options]);

    useEffect(() => {
        setConsent({
            ad_personalization: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "denied",
            ...consentSettings
        });
    }, [consentSettings]);

    const contextValue = useMemo(() => {
        const value: Partial<React.ContextType<typeof FirebaseContext>> = {};

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

    useEffect(() => {
        if (contextValue.analytics) {
            setAnalyticsCollectionEnabled(contextValue.analytics, consentSettings?.analytics_storage === "granted");
        }
    }, [consentSettings]);

    return (
        <FirebaseContext.Provider value={contextValue as React.ContextType<typeof FirebaseContext>}>
            {children}
        </FirebaseContext.Provider>
    );
};
