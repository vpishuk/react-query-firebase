import { useMemo } from "react";
import { AppModel } from "../../types/index.js";
import { useFirestore } from "./useFirestore.js";
import { getDocRef, GetDocRefOptions } from "./utils/getDocRef.js";

/**
 * @inline
 */
export type UseDocReferencesOptions<AppModelType extends AppModel = AppModel> = {
    references: Omit<GetDocRefOptions<AppModelType>, "db">[];
};

/**
 * Gets `CollectionReference` instances
 *
 * @group Hook
 *
 * @param {UseDocReferencesOptions<AppModelType>} options - Options
 *
 * @returns {Array<FirebaseFirestoreTypes.DocumentReference<AppModelType> | null>} A reference to a Firestore document
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
export const useDocReferences = <AppModelType extends AppModel = AppModel>({
    references
}: UseDocReferencesOptions<AppModelType>) => {
    const db = useFirestore();

    return useMemo(() => {
        return references.map(({ path, reference, pathSegments }) => getDocRef({ db, reference, path, pathSegments }));
    }, [references, db]);
};
