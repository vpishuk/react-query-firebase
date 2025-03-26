import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { connectAuthEmulator } from "@react-native-firebase/auth";
import { FirebaseAnalyticsTypes, setAnalyticsCollectionEnabled, setConsent } from "@react-native-firebase/analytics";
import { FirebaseRemoteConfigTypes } from "@react-native-firebase/remote-config";
import { connectFirestoreEmulator } from "@react-native-firebase/firestore";
import firebase, { ReactNativeFirebase, initializeApp } from "@react-native-firebase/app";

/**
 * @inline
 * @see https://firebase.google.com/docs/reference/js/firestore_.firestoresettings
 */
export type FirestoreSettings = {
    cacheSizeBytes?: number;
    experimentalAutoDetectLongPolling?: boolean;
    experimentalForceLongPolling?: boolean;
    experimentalLongPollingOptions?: {
        timeoutSeconds: number;
    };
    host?: string;
    ignoreUndefinedProperties?: boolean;
    localCache?: {
        kind: "memory" | "persistent";
    };
    ssl?: boolean;
};

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
    platform: "Web" | "ReactNative";
    /**
     * Defines configuration for firebase emulators
     */
    emulators?: FirebaseContextProviderEmulators;
    /**
     * Configuration options for Firebase initialization. {@link https://firebase.google.com/docs/web/setup#config-object | Learn about the Firebase config object}
     */
    options: ReactNativeFirebase.FirebaseAppOptions;
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
    consentSettings?: FirebaseAnalyticsTypes.ConsentSettings;
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
    remoteConfigSettings?: FirebaseRemoteConfigTypes.ConfigSettings;
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
    platform,
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
    const internalFirebase = useMemo(() => {
        return platform === "Web" ? initializeApp(options) : firebase;
    }, [options]);

    useEffect(() => {
        setConsent(firebase.analytics(), {
            ad_personalization: false,
            ad_storage: false,
            ad_user_data: false,
            analytics_storage: false,
            functionality_storage: false,
            personalization_storage: false,
            security_storage: false,
            ...consentSettings
        });
    }, [consentSettings, firebase]);

    const internalFirestore = useMemo(() => {
        if (firestoreEnabled) {
            if (emulators?.firestore?.host && emulators?.firestore?.port) {
                connectFirestoreEmulator(
                    internalFirebase.firestore(),
                    emulators.firestore.host,
                    emulators.firestore.port
                );
            }

            return internalFirebase.firestore();
        }

        return null;
    }, [firestoreSettings, emulators?.firestore, firestoreEnabled, internalFirebase]);

    const internalAuth = useMemo(() => {
        if (authEnabled) {
            const localAuth = internalFirebase.auth();
            if (emulators?.auth?.host) {
                connectAuthEmulator(localAuth, emulators?.auth?.host, {
                    disableWarnings: true
                });
            }
            return localAuth;
        }
        return null;
    }, [emulators?.auth, authEnabled, internalFirebase]);

    const internalAnalytics = useMemo(() => {
        if (
            analyticsEnabled &&
            options.measurementId &&
            (typeof window !== "undefined" || platform === "ReactNative")
        ) {
            return internalFirebase.analytics();
        }
        return null;
    }, [analyticsEnabled, options.measurementId, internalFirebase]);

    const internalRemoteConfig = useMemo(() => {
        if (remoteConfigEnabled && (typeof window !== "undefined" || platform === "ReactNative")) {
            const localRemoteConfig = internalFirebase.remoteConfig();
            if (remoteConfigSettings) {
                localRemoteConfig.settings.fetchTimeMillis = remoteConfigSettings.fetchTimeMillis;
                localRemoteConfig.settings.minimumFetchIntervalMillis = remoteConfigSettings.minimumFetchIntervalMillis;
                localRemoteConfig.defaultConfig = remoteConfigDefaults;
            }
            return localRemoteConfig;
        }
        return null;
    }, [remoteConfigEnabled, remoteConfigSettings, internalFirebase]);

    const contextValue = useMemo(
        () => ({
            firebase: internalFirebase,
            auth: internalAuth,
            analytics: internalAnalytics,
            firestore: internalFirestore,
            remoteConfig: internalRemoteConfig
        }),
        [internalFirebase, internalAuth, internalAnalytics, internalFirestore, internalRemoteConfig]
    );

    useEffect(() => {
        if (contextValue.analytics) {
            setAnalyticsCollectionEnabled(contextValue.analytics, !!consentSettings?.analytics_storage);
        }
    }, [consentSettings]);

    return (
        <FirebaseContext.Provider value={contextValue as React.ContextType<typeof FirebaseContext>}>
            {children}
        </FirebaseContext.Provider>
    );
};
