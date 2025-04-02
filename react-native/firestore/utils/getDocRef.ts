import { doc, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { AppModel } from "../../../types";

/**
 * @inline
 */
export type GetDocRefOptions<AppModelType extends AppModel = AppModel> = {
    db: FirebaseFirestoreTypes.Module;
    reference?:
        | FirebaseFirestoreTypes.CollectionReference<AppModelType>
        | FirebaseFirestoreTypes.DocumentReference<AppModelType>;
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
    if ((!reference && !path) || (reference && !path)) {
        return null;
    }

    const docRef = !reference
        ? doc(db, path as string, ...(pathSegments || []))
        : doc(reference, path, ...(pathSegments || []));

    return docRef as FirebaseFirestoreTypes.DocumentReference<AppModelType>;
};
