import { useContext, useMemo } from "react";
import { useIKClient } from "./useIKClient";
import { IKContext } from "./IKContext";
import { UrlOptions } from "imagekit-javascript/dist/src/interfaces/UrlOptions";

type UseIKImageSrcOptions = {
    imageOptions: UrlOptions;
};

export const useIKImageSrc = ({ imageOptions }: UseIKImageSrcOptions) => {
    const ikClient = useIKClient();
    const { urlEndpoint = "" } = useContext(IKContext);

    return useMemo(() => {
        return ikClient.url(imageOptions);
    }, [ikClient, urlEndpoint, imageOptions]);
};
