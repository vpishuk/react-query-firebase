import { useContext, useMemo } from "react";
import ImageKit from "imagekit-javascript";
import { IKContext } from "./IKContext";

export const useIKClient = () => {
    const { urlEndpoint } = useContext(IKContext);

    return useMemo(
        () =>
            new ImageKit({
                urlEndpoint: urlEndpoint || ""
            }),
        [urlEndpoint]
    );
};
