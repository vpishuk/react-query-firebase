"use client";

import { createContext } from "react";

import { firebase } from "@react-native-firebase/auth";

export type FirebaseContextValue = {
    auth: ReturnType<typeof firebase.auth>;
    analytics: ReturnType<typeof firebase.analytics>;
    firebase: ReturnType<typeof firebase.app>;
    remoteConfig: ReturnType<typeof firebase.remoteConfig>;
    firestore: ReturnType<typeof firebase.firestore>;
};

/**
 * FirebaseContext is a shared context across children that provides access to firebase features
 *
 * @internal
 */

export const FirebaseContext = createContext<FirebaseContextValue>({} as FirebaseContextValue);
