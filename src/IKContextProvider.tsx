import React, { PropsWithChildren } from "react";
import { IKContext, IKContextValue } from "./IKContext";

type IKContextProviderProps = PropsWithChildren & {
    options: IKContextValue;
};

export const IKContextProvider: React.FC<IKContextProviderProps> = ({ options, children }) => {
    return <IKContext.Provider value={options}>{children}</IKContext.Provider>;
};
