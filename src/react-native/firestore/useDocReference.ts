import { useMemo } from "react";
import { AppModel } from "../../types/index.js";
import { useFirestore } from "./useFirestore.js";
import { getDocRef, GetDocRefOptions } from "./utils/getDocRef.js";

/**
 * @inline
 */
export type UseDocReferenceOptions<AppModelType extends AppModel = AppModel> = Omit<
    GetDocRefOptions<AppModelType>,
    "db"
>;

/**
 * Gets a `CollectionReference` instance.
 *
 * @group Hook
 *
 * @param {UseDocReferenceOptions<AppModelType>} options - Options
 *
 * @returns {FirebaseFirestoreTypes.DocumentReference<AppModelType, AppModelType> | null} A reference to a Firestore document
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const ref = useDocReference({
 *      reference: collection('todos')
 *      path: 'first'
 *  });
 * };
 * ```
 */
export const useDocReference = <AppModelType extends AppModel = AppModel>({
    path,
    reference,
    pathSegments
}: UseDocReferenceOptions<AppModelType>) => {
    const db = useFirestore();
    return useMemo(() => {
        return getDocRef({ db, path, pathSegments, reference });
    }, [db, path, pathSegments, reference]);
};
