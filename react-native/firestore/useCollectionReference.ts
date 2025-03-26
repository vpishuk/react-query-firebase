import { collection, FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { useMemo } from "react";
import { useFirestore } from "./useFirestore";

export type UseCollectionReferenceOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
> = {
    reference?:
        | FirebaseFirestoreTypes.CollectionReference<AppModelType>
        | FirebaseFirestoreTypes.DocumentReference<AppModelType>;
    path: string;
    pathSegments?: string[];
};

/**
 * Creates a reference to a Firestore collection based on the provided path, reference, and path segments.
 *
 * This hook utilizes useMemo for optimization, ensuring the collection reference is recalculated only when its dependencies change.
 *
 * @param {UseCollectionReferenceOptions<AppModelType>} options - The options including path, reference, and pathSegments to construct the Firestore collection reference.
 * @param {string} options.path - The base path for the collection.
 * @param {FirestoreReference} options.reference - An optional Firestore reference object that should be of type "collection".
 * @param {string[]} options.pathSegments - Additional path segments to append to the base path.
 * @returns {CollectionReference} A Firestore collection reference constructed using the specified path, reference, and path segments.
 */
export const useCollectionReference = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
    path,
    reference,
    pathSegments
}: UseCollectionReferenceOptions<AppModelType>): FirebaseFirestoreTypes.CollectionReference<AppModelType> => {
    const db = useFirestore();

    return useMemo(() => {
        return !reference
            ? (collection(
                  db,
                  path || "",
                  ...(pathSegments || [])
              ) as FirebaseFirestoreTypes.CollectionReference<AppModelType>)
            : (collection(
                  reference,
                  path,
                  ...(pathSegments || [])
              ) as FirebaseFirestoreTypes.CollectionReference<AppModelType>);
    }, [db, reference, path, pathSegments]);
};
