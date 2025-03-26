import { doc, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { useMemo } from "react";
import { useFirestore } from "./useFirestore";

export type UseDocReferencesOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
> = {
    reference?:
        | FirebaseFirestoreTypes.CollectionReference<AppModelType>
        | FirebaseFirestoreTypes.DocumentReference<AppModelType>;
    path: string;
    pathSegments?: string[];
};

/**
 * A custom hook to generate document references for Firebase Firestore documents using given
 * reference options.
 *
 * The hook accepts an array of options, where each option may contain a path,
 * an existing reference, or path segments, and returns an array of generated
 * Firestore document references based on those options. The references can be used
 * to interact with the Firestore database documents. It uses memoization to optimize
 * reference generation.
 *
 * @param {UseDocReferencesOptions<AppModelType>[]} references - An array of options
 * specifying how to generate document references. Each option may include a `path`
 * as a string, a `reference` as a Firestore reference, and `pathSegments` as an array of strings.
 * @returns {DocumentReference<AppModelType>[]} An array of Firestore document references
 * generated from the options provided.
 */
export const useDocReferences = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>(
    references: UseDocReferencesOptions<AppModelType>[]
) => {
    const db = useFirestore();

    return useMemo(() => {
        return references.map(({ path, reference, pathSegments }) => {
            return (
                !reference
                    ? doc(db, path || "", ...(pathSegments || []))
                    : doc(reference, path, ...(pathSegments || []))
            ) as FirebaseFirestoreTypes.DocumentReference<AppModelType>;
        });
    }, [references, db]);
};
