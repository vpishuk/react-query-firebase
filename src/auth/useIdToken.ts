import { useCallback, useEffect, useState } from "react";
import { useCurrentUser } from "./useCurrentUser";

export const useIdToken = () => {
    const currentUser = useCurrentUser();
    const [idToken, setIdToken] = useState("");

    const callback = useCallback(async () => {
        if (!currentUser) {
            setIdToken("");
            return;
        }

        const idToken = await currentUser.getIdToken();
        setIdToken(idToken);
    }, [currentUser, idToken]);

    const refresh = useCallback(async () => {
        if (!currentUser) {
            return;
        }

        const idToken = await currentUser.getIdToken(true);
        setIdToken(idToken);
    }, [currentUser, idToken]);

    useEffect(() => {
        callback();
    }, [currentUser?.uid ?? ""]);

    return {
        idToken,
        refresh
    };
};
