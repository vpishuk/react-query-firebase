import { getDoc as firestoreGetDoc } from "@react-native-firebase/firestore";
import { getDocRef, GetDocRefOptions } from "./getDocRef";
import { AppModel } from "../../../types";

/**
 * @inline
 */
export type GetDocSnapOptions<AppModelType extends AppModel = AppModel> = GetDocRefOptions<AppModelType>;

/**
 * Asynchronously retrieves a document snapshot from Firestore using a specified document reference
 * or path information. This function handles getting the appropriate document reference based on
 * the parameters provided, and then fetches the document data from Firestore.
 *
 * @group Utility
 *
 * @param {GetDocSnapOptions<AppModelType>} options - The options for retrieving the document snapshot
 *
 * @returns {Promise<DocumentSnapshot<AppModelType, AppModelType> | null>} Returns a document reference
 */
export const getDocSnap = async <AppModelType extends AppModel = AppModel>({
    db,
    reference,
    path,
    pathSegments
}: GetDocSnapOptions<AppModelType>) => {
    const docRef = await getDocRef<AppModelType>({ db, reference, path, pathSegments });

    if (docRef) {
        return await firestoreGetDoc(docRef);
    }

    return null;
};
