import { useContext } from "react";

import { FirebaseContext } from "./FirebaseContext.js";

/**
 * Custom hook to retrieve firebase context.
 * @returns {FirebaseContextValue} The authentication object from the Firebase context.
 */

export const useFirebaseContext = () => useContext(FirebaseContext);
