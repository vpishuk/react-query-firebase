"use client";

import { createContext } from "react";

import { type ReactNativeFirebase } from "@react-native-firebase/app";
import { type FirebaseAuthTypes } from "@react-native-firebase/auth";
import { type FirebaseAnalyticsTypes } from "@react-native-firebase/analytics";
import { type FirebaseRemoteConfigTypes } from "@react-native-firebase/remote-config";
import { type FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type FirebaseContextValue = {
    auth: FirebaseAuthTypes.Module;
    analytics: FirebaseAnalyticsTypes.Module;
    firebase: ReactNativeFirebase.FirebaseApp;
    remoteConfig: FirebaseRemoteConfigTypes.Module;
    firestore: FirebaseFirestoreTypes.Module;
};

/**
 * FirebaseContext is a shared context across children that provides access to firebase features
 *
 * @internal
 */

export const FirebaseContext = createContext<FirebaseContextValue>({} as FirebaseContextValue);
