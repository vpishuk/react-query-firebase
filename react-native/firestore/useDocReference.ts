import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { useEffect, useRef } from "react";
import { useFirestore } from "./useFirestore";
import { AppModel } from "../../types";
import { getDocRef, GetDocRefOptions } from "./utils/getDocRef";

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
    const ref = useRef<FirebaseFirestoreTypes.DocumentReference<AppModelType> | null>(
        getDocRef({ db, path, pathSegments, reference })
    );

    useEffect(() => {
        ref.current = getDocRef({ db, path, pathSegments, reference });
    }, [path, reference, pathSegments, db]);

    return ref.current;
};
