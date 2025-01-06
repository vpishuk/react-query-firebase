"use client";
import { createContext } from "react";

import { Auth } from "firebase/auth";
import { Analytics } from "firebase/analytics";
import { Firestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { RemoteConfig } from "firebase/remote-config";

export type FirebaseContextValue = {
    auth: Auth;
    analytics: Analytics;
    firebase: FirebaseApp;
    remoteConfig: RemoteConfig;
    firestore: Firestore;
};

export const FirebaseContext = createContext<Partial<FirebaseContextValue>>({});
