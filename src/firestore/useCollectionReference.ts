import { collection, CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";

import { useMemo } from "react";
import { useFirestore } from "./useFirestore";

export type UseCollectionReferenceOptions<AppModelType, DbModelType extends DocumentData = DocumentData> = {
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
    path: string;
    pathSegments?: string[];
};

/**
 * Creates a reference to a Firestore collection based on the provided path, reference, and path segments.
 *
 * This hook utilizes useMemo for optimization, ensuring the collection reference is recalculated only when its dependencies change.
 *
 * @param {UseCollectionReferenceOptions<AppModelType, DbModelType>} options - The options including path, reference, and pathSegments to construct the Firestore collection reference.
 * @param {string} options.path - The base path for the collection.
 * @param {FirestoreReference} options.reference - An optional Firestore reference object that should be of type "collection".
 * @param {string[]} options.pathSegments - Additional path segments to append to the base path.
 * @returns {CollectionReference} A Firestore collection reference constructed using the specified path, reference, and path segments.
 */
export const useCollectionReference = <AppModelType, DbModelType extends DocumentData = DocumentData>({
    path,
    reference,
    pathSegments
}: UseCollectionReferenceOptions<AppModelType, DbModelType>) => {
    const db = useFirestore();

    return useMemo(() => {
        return !reference
            ? collection(db, path || "", ...(pathSegments || []))
            : reference.type === "collection"
              ? collection(reference, path, ...(pathSegments || []))
              : collection(reference, path, ...(pathSegments || []));
    }, [path, reference?.path, pathSegments]);
};
