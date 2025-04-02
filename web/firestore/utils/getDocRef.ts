import { CollectionReference, doc, DocumentReference, Firestore } from "firebase/firestore";
import { AppModel } from "../../../types";

/**
 * @inline
 */
export type GetDocRefOptions<AppModelType extends AppModel = AppModel> = {
    db: Firestore;
    reference?: CollectionReference<AppModelType, AppModelType> | DocumentReference<AppModelType, AppModelType>;
    path?: string;
    pathSegments?: string[];
};

/**
 * Retrieves a document reference based on provided database options.
 * Either `reference` or `path`.
 *
 * @group Utility
 *
 * @param {GetDocRefOptions<AppModelType>} options - The options for building doc reference.
 *
 * @returns {DocumentReference<AppModelType, AppModelType>} Returns a document reference
 */
export const getDocRef = <AppModelType extends AppModel = AppModel>({
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
        : reference.type === "collection"
          ? doc(reference, path, ...(pathSegments || []))
          : reference.type === "document"
            ? doc(reference, path as string, ...(pathSegments || []))
            : null;

    return docRef as DocumentReference<AppModelType, AppModelType>;
};
