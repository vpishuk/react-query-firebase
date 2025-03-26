import { CollectionReference, doc, DocumentData, DocumentReference } from "firebase/firestore";

import { useMemo } from "react";
import { useFirestore } from "./useFirestore";

export type UseDocReferencesOptions<AppModelType, DbModelType extends DocumentData = DocumentData> = {
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
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
 * @param {UseDocReferencesOptions<AppModelType, DbModelType>[]} references - An array of options
 * specifying how to generate document references. Each option may include a `path`
 * as a string, a `reference` as a Firestore reference, and `pathSegments` as an array of strings.
 * @returns {DocumentReference<AppModelType, DbModelType>[]} An array of Firestore document references
 * generated from the options provided.
 */
export const useDocReferences = <AppModelType, DbModelType extends DocumentData = DocumentData>(
    references: UseDocReferencesOptions<AppModelType, DbModelType>[]
) => {
    const db = useFirestore();

    return useMemo(() => {
        return references.map(({ path, reference, pathSegments }) => {
            return (
                !reference
                    ? doc(db, path || "", ...(pathSegments || []))
                    : reference.type === "collection"
                      ? doc(reference, path, ...(pathSegments || []))
                      : doc(reference, path, ...(pathSegments || []))
            ) as DocumentReference<AppModelType, DbModelType>;
        });
    }, [references, db]);
};
