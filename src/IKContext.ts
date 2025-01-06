import { createContext } from "react";

type IKAuthenticatorResponse = {
    token: string;
    expire: number;
    signature: string;
};

export type IKContextValue = {
    publicKey: string;
    urlEndpoint: string;
    authenticator: () => Promise<IKAuthenticatorResponse>;
};

export const IKContext = createContext<Partial<IKContextValue>>({});
