import { useCallback, useEffect, useState } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { onIdTokenChanged, FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useAuth } from "./useAuth";

/**
 * @inline
 */
export type UseIdTokenResult = {
    idToken: string;
    refresh: () => Promise<string | undefined>;
};

/**
 * A hook to manage the ID token.
 * It monitors changes to the ID token and provides the token itself along with a refresh method to update the token when needed.
 *
 * @group Hook
 *
 * @returns {UseIdTokenResult}
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const result = useIdToken();
 *  useEffect(() => {
 *      const timeout = setTimeout(() => {
 *          result.refresh();
 *      }, 5000);
 *      return () => clearTimeout();
 *  }, [])
 *  console.log(resilt.idToken);
 * };
 * ```
 */
export const useIdToken = (): UseIdTokenResult => {
    const auth = useAuth();

    const currentUser = useCurrentUser();
    const [idToken, setIdToken] = useState("");

    const callback = useCallback(async () => {
        if (!currentUser) {
            setIdToken("");
            return;
        }

        const idToken = await currentUser.getIdToken();
        setIdToken(idToken);
    }, [currentUser]);

    const refresh = useCallback(async () => {
        if (!currentUser) {
            return;
        }

        const idToken = await currentUser.getIdToken(true);
        return idToken;
    }, [currentUser]);

    useEffect(() => {
        callback();
    }, [callback]);

    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, (user: FirebaseAuthTypes.User) => {
            if (user) {
                user.getIdToken().then((idToken) => {
                    setIdToken(idToken);
                });
            } else {
                setIdToken("");
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return {
        idToken,
        refresh
    };
};
