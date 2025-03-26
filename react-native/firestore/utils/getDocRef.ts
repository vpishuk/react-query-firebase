import { doc, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type GetDocRefOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
> = {
    db: FirebaseFirestoreTypes.Module;
    reference?:
        | FirebaseFirestoreTypes.CollectionReference<AppModelType>
        | FirebaseFirestoreTypes.DocumentReference<AppModelType>;
    path?: string;
    pathSegments?: string[];
};

/**
 * Retrieves a document reference based on provided database options.
 * Either `reference` or `path` must be provided, not both.
 *
 * @param {Object} options - The options for getting a document reference.
 * @param {FirebaseFirestoreTypes.Module} options.db - The Firestore database instance.
 * @param {FirebaseFirestoreTypes.DocumentReference | FirebaseFirestoreTypes.CollectionReference | null} [options.reference] - Reference to a document or collection.
 * @param {string | null} [options.path] - Path to the document.
 * @param {string[] | null} [options.pathSegments] - Additional path segments if any.
 * @returns {FirebaseFirestoreTypes.DocumentReference<AppModelType>} The document reference.
 */
export const getDocRef = async <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
    db,
    reference,
    path,
    pathSegments
}: GetDocRefOptions<AppModelType>) => {
    if (!reference && !path) {
        throw new Error("One of the options must be provided: path or reference.");
    }

    const docRef = !reference
        ? doc(db, path as string, ...(pathSegments || []))
        : doc(reference, path, ...(pathSegments || []));

    return docRef as FirebaseFirestoreTypes.DocumentReference<AppModelType>;
};
