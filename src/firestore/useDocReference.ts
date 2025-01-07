import { doc, CollectionReference, DocumentData, DocumentReference, Firestore } from "firebase/firestore";

import { useEffect, useRef } from "react";
import { useFirestore } from "../useFirestore";

export type UseDocReferenceOptions<AppModelType, DbModelType extends DocumentData = DocumentData> = {
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
    path?: string;
    pathSegments?: string[];
};

/**
 * Generates a document reference for a specified path or reference in Firestore.
 * If a reference is not provided, it constructs a document reference using the Firestore instance, path, and path segments.
 *
 * @param {Firestore} db - The Firestore database instance used to create the document reference.
 * @param {UseDocReferenceOptions<AppModelType, DbModelType>} options - An object containing the path, path segments, and optional reference.
 * @param {string} options.path - The path to the document in the Firestore database.
 * @param {string[]} [options.pathSegments] - Optional additional segments to join with the path.
 * @param {DocumentReference | CollectionReference} [options.reference] - Optional Firestore reference object that influences how the document reference is constructed.
 *
 * @returns {DocumentReference<AppModelType, DbModelType> | null} A Firestore document reference if the path is specified; otherwise, returns null if path is not provided.
 */
const getDocReference = <AppModelType, DbModelType extends DocumentData = DocumentData>(
    db: Firestore,
    { path, pathSegments, reference }: UseDocReferenceOptions<AppModelType, DbModelType>
) => {
    if (!path) {
        return null;
    }

    return (
        !reference
            ? doc(db, path || "", ...(pathSegments || []))
            : reference.type === "collection"
              ? doc(reference, path, ...(pathSegments || []))
              : doc(reference, path, ...(pathSegments || []))
    ) as DocumentReference<AppModelType, DbModelType>;
};

/**
 * Custom hook to generate and manage a Firestore document reference.
 * This hook facilitates the retrieval of a Firestore document reference based on given options such as path and reference data.
 * The reference is updated whenever the associated path, reference, or path segments change.
 *
 * @param {UseDocReferenceOptions<AppModelType, DbModelType>} options - Configuration options for setting up the document reference.
 * @param {string} options.path - The path to the Firestore document.
 * @param {DbModelType} options.reference - Reference data for the document, providing additional context or specifics.
 * @param {string[]} options.pathSegments - Parts of the path to construct the full document path dynamically.
 *
 * @returns {DocumentReference<AppModelType, DbModelType> | null} The Firestore document reference corresponding to the provided path and options, or null if not initialized.
 */
export const useDocReference = <AppModelType, DbModelType extends DocumentData = DocumentData>({
    path,
    reference,
    pathSegments
}: UseDocReferenceOptions<AppModelType, DbModelType>) => {
    const db = useFirestore();
    const ref = useRef<DocumentReference<AppModelType, DbModelType> | null>(
        getDocReference(db, { path, pathSegments, reference })
    );

    useEffect(() => {
        ref.current = getDocReference(db, { path, pathSegments, reference });
    }, [path, reference, pathSegments]);

    return ref.current;
};
