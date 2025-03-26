import { DocumentData } from "firebase/firestore";
import { getDocSnap, GetDocSnapOptions } from "./getDocSnap";

export type GetDocDataOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
> = GetDocSnapOptions<AppModelType, DbModelType>;

/**
 * Asynchronously retrieves document data from a specified database and reference.
 * Utilizes the helper function `getDocSnap` to fetch the document snapshot and
 * checks if the document exists before returning its data.
 *
 * @param {Object} options - The options for fetching document data.
 * @param {FirebaseFirestore} options.db - The Firestore database instance.
 * @param {DocumentReference=} options.reference - The document reference. This is an optional parameter.
 * @param {string=} options.path - The path to the document in the database. This is an optional parameter.
 * @param {Array<string>=} options.pathSegments - The path segments for the document's path. This is an optional parameter.
 *
 * @returns {Promise<AppModelType | null>} Returns a promise that resolves to the document data if it exists,
 * or null if the document does not exist.
 */
export const getDocData = async <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    db,
    reference,
    path,
    pathSegments
}: GetDocDataOptions<AppModelType, DbModelType>) => {
    const docSnap = await getDocSnap<AppModelType, DbModelType>({ db, reference, path, pathSegments });

    if (docSnap && docSnap.exists()) {
        return docSnap.data();
    }

    return null;
};
