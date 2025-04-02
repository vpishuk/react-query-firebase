import { useMemo } from "react";
import { useFirestore } from "./useFirestore";
import { AppModel } from "../../types";
import { getDocRef, GetDocRefOptions } from "./utils/getDocRef";

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
 * @returns {Array<DocumentReference<AppModelType, AppModelType> | null>} A reference to a Firestore document
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
