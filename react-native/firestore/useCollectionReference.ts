import { collection, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { useMemo } from "react";
import { useFirestore } from "./useFirestore";
import { AppModel } from "../../types";

/**
 * @inline
 */
export type UseCollectionReferenceOptions<AppModelType extends AppModel = AppModel> = {
    /**
     * CollectionReference or DocumentReference that is used as a root to lookup a sub-collection
     */
    reference?:
        | FirebaseFirestoreTypes.CollectionReference<AppModelType>
        | FirebaseFirestoreTypes.DocumentReference<AppModelType>;
    /**
     * A slash-separated path to a collection.
     */
    path: string;
    /**
     * Additional path segments that will be applied relative
     */
    pathSegments?: string[];
};

/**
 * Gets a `CollectionReference` instance that refers to a subcollection of
 * `reference` at the specified relative path.
 *
 * @group Hook
 *
 * @param {UseCollectionReferenceOptions<AppModelType>} options - Options
 *
 * @returns {FirebaseFirestoreTypes.CollectionReference<AppModelType, AppModelType>} A reference to a Firestore collection
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const ref = useCollectionReference({
 *      path: 'todos'
 *  });
 * };
 * ```
 */
export const useCollectionReference = <AppModelType extends AppModel = AppModel>({
    path,
    reference,
    pathSegments
}: UseCollectionReferenceOptions<AppModelType>) => {
    const db = useFirestore();

    return useMemo(() => {
        return !reference
            ? collection(db, path || "", ...(pathSegments || []))
            : collection(reference, path, ...(pathSegments || []));
    }, [db, reference, path, pathSegments]) as FirebaseFirestoreTypes.CollectionReference<AppModelType>;
};
