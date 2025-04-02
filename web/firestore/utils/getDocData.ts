import { getDocSnap, GetDocSnapOptions } from "./getDocSnap";
import { AppModel } from "../../../types";

/**
 * @inline
 */
export type GetDocDataOptions<AppModelType extends AppModel = AppModel> = GetDocSnapOptions<AppModelType>;

/**
 * Asynchronously retrieves document data from a specified database reference.
 * Utilizes the helper function `getDocSnap` to fetch the document snapshot and
 * checks if the document exists before returning its data.
 *
 * @group Utility
 *
 * @param {GetDocDataOptions<AppModelType>} options - The options for fetching document data.
 *
 * @returns {Promise<AppModelType | null>} Returns a promise that resolves to the document data if it exists, or null if the document does not exist.
 */
export const getDocData = async <AppModelType extends AppModel = AppModel>({
    db,
    reference,
    path,
    pathSegments
}: GetDocDataOptions<AppModelType>) => {
    const docSnap = await getDocSnap<AppModelType>({ db, reference, path, pathSegments });

    if (docSnap && docSnap.exists()) {
        return { ...docSnap.data(), uid: docSnap.id };
    }

    return null;
};
