import { createContext } from "react";

import { type FirebaseApp } from "@react-native-firebase/app";
import { type FirebaseAuthTypes } from "@react-native-firebase/auth";
import { type Analytics } from "@react-native-firebase/analytics";
import { type Messaging } from "@react-native-firebase/messaging";
import { type FirebaseRemoteConfigTypes } from "@react-native-firebase/remote-config";
import { type Firestore } from "@react-native-firebase/firestore";

export type FirebaseContextValue = {
    auth: FirebaseAuthTypes.Module | null;
    analytics: Analytics | null;
    firebase: FirebaseApp | null;
    remoteConfig: FirebaseRemoteConfigTypes.Module | null;
    firestore: Firestore | null;
    messaging: Messaging | null;
};

/**
 * FirebaseContext is a shared context across children that provides access to firebase features
 *
 * @internal
 */

export const FirebaseContext = createContext<FirebaseContextValue>({} as FirebaseContextValue);
