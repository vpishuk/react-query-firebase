import { Context, useContext } from "react";
import { FirebaseContext, FirebaseContextValue } from "./FirebaseContext";

export const useRemoteConfig = () => {
    const { remoteConfig } = useContext<FirebaseContextValue>(FirebaseContext as Context<FirebaseContextValue>);
    return remoteConfig;
};
