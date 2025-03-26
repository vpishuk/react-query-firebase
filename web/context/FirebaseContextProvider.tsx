import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { ConsentSettings, getAnalytics, setAnalyticsCollectionEnabled, setConsent } from "firebase/analytics";
import { getRemoteConfig, RemoteConfigSettings } from "firebase/remote-config";
import { connectFirestoreEmulator, FirestoreSettings, initializeFirestore } from "firebase/firestore";
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
     * Specifies custom configurations for your Cloud Firestore instance.
     * You must set these before invoking any other methods.
     * {@link https://firebase.google.com/docs/reference/js/firestore_.firestoresettings}
     * @defaultValue {}
     */
    firestoreSettings?: FirestoreSettings;
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
    remoteConfigDefaults = {},
    firestoreSettings
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

    const firestore = useMemo(() => {
        if (firestoreEnabled) {
            const localFirestore = initializeFirestore(firebase, firestoreSettings || {});

            if (emulators?.firestore?.host && emulators?.firestore?.port) {
                connectFirestoreEmulator(localFirestore, emulators.firestore.host, emulators.firestore.port);
            }

            return localFirestore;
        }

        return null;
    }, [firestoreSettings, emulators?.firestore, firestoreEnabled, firebase]);

    const auth = useMemo(() => {
        if (authEnabled) {
            const localAuth = getAuth(firebase);
            if (emulators?.auth?.host) {
                connectAuthEmulator(localAuth, emulators?.auth?.host, {
                    disableWarnings: true
                });
            }
            return localAuth;
        }
        return null;
    }, [emulators?.auth, authEnabled, firebase]);

    const analytics = useMemo(() => {
        if (analyticsEnabled && options.measurementId && typeof window !== "undefined") {
            return getAnalytics(firebase);
        }
        return null;
    }, [analyticsEnabled, options.measurementId, firebase]);

    const remoteConfig = useMemo(() => {
        if (remoteConfigEnabled && typeof window !== "undefined") {
            const localRemoteConfig = getRemoteConfig(firebase);
            if (remoteConfigSettings) {
                localRemoteConfig.settings.fetchTimeoutMillis = remoteConfigSettings.fetchTimeoutMillis;
                localRemoteConfig.settings.minimumFetchIntervalMillis = remoteConfigSettings.minimumFetchIntervalMillis;
                localRemoteConfig.defaultConfig = remoteConfigDefaults;
            }
            return localRemoteConfig;
        }
        return null;
    }, [remoteConfigEnabled, firebase, remoteConfigDefaults, remoteConfigSettings]);

    const contextValue = useMemo(
        () => ({
            firebase,
            auth,
            analytics,
            firestore,
            remoteConfig
        }),
        [firebase, auth, analytics, firestore, remoteConfig]
    );

    useEffect(() => {
        if (contextValue.analytics) {
            setAnalyticsCollectionEnabled(contextValue.analytics, consentSettings?.analytics_storage === "granted");
        }
    }, [consentSettings?.analytics_storage, contextValue.analytics]);

    return (
        <FirebaseContext.Provider value={contextValue as React.ContextType<typeof FirebaseContext>}>
            {children}
        </FirebaseContext.Provider>
    );
};
