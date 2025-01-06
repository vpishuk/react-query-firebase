import { CollectionReference, doc, DocumentData, DocumentReference } from "firebase/firestore";

import { useMemo } from "react";
import { useFirestore } from "../useFirestore";

export type UseDocReferencesOptions<AppModelType, DbModelType extends DocumentData = DocumentData> = {
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
    path: string;
    pathSegments?: string[];
};

export const useDocReferences = <AppModelType, DbModelType extends DocumentData = DocumentData>(
    references: UseDocReferencesOptions<AppModelType, DbModelType>[]
) => {
    const db = useFirestore();

    return useMemo(() => {
        return references.map(({ path, reference, pathSegments }) => {
            return (
                !reference
                    ? doc(db, path || "", ...(pathSegments || []))
                    : reference.type === "collection"
                      ? doc(reference, path, ...(pathSegments || []))
                      : doc(reference, path, ...(pathSegments || []))
            ) as DocumentReference<AppModelType, DbModelType>;
        });
    }, [references]);
};
