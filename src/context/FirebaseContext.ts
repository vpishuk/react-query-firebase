"use client";

import { createContext } from "react";

import { Auth } from "firebase/auth";
import { Analytics } from "firebase/analytics";
import { Firestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { RemoteConfig } from "firebase/remote-config";

type FirebaseContextValue = {
    auth: Auth;
    analytics: Analytics;
    firebase: FirebaseApp;
    remoteConfig: RemoteConfig;
    firestore: Firestore;
};

/**
 * FirebaseContext is a shared context across children that provides access to firebase features
 *
 * @internal
 */

export const FirebaseContext = createContext<FirebaseContextValue>({} as FirebaseContextValue);
