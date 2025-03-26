import { doc, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { useMemo } from "react";
import { useFirestore } from "./useFirestore";

export type UseDocReferenceOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
> = {
    reference?:
        | FirebaseFirestoreTypes.CollectionReference<AppModelType>
        | FirebaseFirestoreTypes.DocumentReference<AppModelType>;
    path?: string;
    pathSegments?: string[];
};

/**
 * Generates a document reference for a specified path or reference in Firestore.
 * If a reference is not provided, it constructs a document reference using the Firestore instance, path, and path segments.
 *
 * @param {Firestore} db - The Firestore database instance used to create the document reference.
 * @param {UseDocReferenceOptions<AppModelType>} options - An object containing the path, path segments, and optional reference.
 * @param {string} options.path - The path to the document in the Firestore database.
 * @param {string[]} [options.pathSegments] - Optional additional segments to join with the path.
 * @param {DocumentReference | CollectionReference} [options.reference] - Optional Firestore reference object that influences how the document reference is constructed.
 *
 * @returns {DocumentReference<AppModelType> | null} A Firestore document reference if the path is specified; otherwise, returns null if path is not provided.
 */
const getDocReference = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>(
    db: FirebaseFirestoreTypes.Module,
    { path, pathSegments, reference }: UseDocReferenceOptions<AppModelType>
) => {
    return (
        !reference ? doc(db, path || "", ...(pathSegments || [])) : doc(reference, path, ...(pathSegments || []))
    ) as FirebaseFirestoreTypes.DocumentReference<AppModelType>;
};

/**
 * Custom hook to generate and manage a Firestore document reference.
 * This hook facilitates the retrieval of a Firestore document reference based on given options such as path and reference data.
 * The reference is updated whenever the associated path, reference, or path segments change.
 *
 * @param {UseDocReferenceOptions<AppModelType>} options - Configuration options for setting up the document reference.
 * @param {string} options.path - The path to the Firestore document.
 * @param {DbModelType} options.reference - Reference data for the document, providing additional context or specifics.
 * @param {string[]} options.pathSegments - Parts of the path to construct the full document path dynamically.
 *
 * @returns {FirebaseFirestoreTypes.DocumentReference<AppModelType> | null} The Firestore document reference corresponding to the provided path and options, or null if not initialized.
 */
export const useDocReference = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
    path,
    reference,
    pathSegments
}: UseDocReferenceOptions<AppModelType>): FirebaseFirestoreTypes.DocumentReference<AppModelType> => {
    const db = useFirestore();

    return useMemo(() => {
        return getDocReference(db, { path, pathSegments, reference });
    }, [db, reference, path, pathSegments]);
};
