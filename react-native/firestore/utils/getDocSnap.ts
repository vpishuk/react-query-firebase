import { FirebaseFirestoreTypes, getDoc as firestoreGetDoc } from "@react-native-firebase/firestore";
import { getDocRef, GetDocRefOptions } from "./getDocRef";

export type GetDocSnapOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
> = GetDocRefOptions<AppModelType>;

/**
 * Asynchronously retrieves a document snapshot from Firestore using a specified document reference
 * or path information. This function handles getting the appropriate document reference based on
 * the parameters provided, and then fetches the document data from Firestore.
 *
 * @param {GetDocSnapOptions<AppModelType, DbModelType>} options - An object containing options
 *                                                                for retrieving the document
 *                                                                snapshot.
 * @param {DocumentData} options.db - The Firestore database instance to perform the operation on.
 * @param {string} options.reference - A string representing a direct Firestore document reference.
 * @param {string} options.path - A Firestore path string leading to the document.
 * @param {string[]} options.pathSegments - An array of path segments to build the Firestore path.
 * @returns {Promise<FirebaseFirestoreTypes.DocumentData | null>} A promise that resolves to the document data if the
 *                                         document exists, or `null` if the document does not exist
 *                                         or if the reference could not be obtained.
 */
export const getDocSnap = async <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
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
