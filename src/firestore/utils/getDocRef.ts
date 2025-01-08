import { CollectionReference, doc, DocumentData, DocumentReference, Firestore } from "firebase/firestore";

export type GetDocRefOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
> = {
    db: Firestore;
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
    path?: string;
    pathSegments?: string[];
};

/**
 * Retrieves a document reference based on provided database options.
 * Either `reference` or `path` must be provided, not both.
 *
 * @param {Object} options - The options for getting a document reference.
 * @param {Firestore} options.db - The Firestore database instance.
 * @param {DocumentReference | CollectionReference | null} [options.reference] - Reference to a document or collection.
 * @param {string | null} [options.path] - Path to the document.
 * @param {string[] | null} [options.pathSegments] - Additional path segments if any.
 * @returns {DocumentReference<AppModelType, DbModelType>} The document reference.
 */
export const getDocRef = async <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    db,
    reference,
    path,
    pathSegments
}: GetDocRefOptions<AppModelType, DbModelType>) => {
    if (!reference && !path) {
        throw new Error("One of the options must be provided: path or reference.");
    }

    const docRef = !reference
        ? doc(db, path as string, ...(pathSegments || []))
        : reference.type === "collection"
          ? doc(reference, path, ...(pathSegments || []))
          : reference.type === "document"
            ? doc(reference, path as string, ...(pathSegments || []))
            : null;

    return docRef as DocumentReference<AppModelType, DbModelType>;
};
