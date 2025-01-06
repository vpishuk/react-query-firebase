import { collection, CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";

import { useMemo } from "react";
import { useFirestore } from "../useFirestore";

export type UseCollectionReferenceOptions<AppModelType, DbModelType extends DocumentData = DocumentData> = {
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
    path: string;
    pathSegments?: string[];
};

export const useCollectionReference = <AppModelType, DbModelType extends DocumentData = DocumentData>({
    path,
    reference,
    pathSegments
}: UseCollectionReferenceOptions<AppModelType, DbModelType>) => {
    const db = useFirestore();

    return useMemo(() => {
        return !reference
            ? collection(db, path || "", ...(pathSegments || []))
            : reference.type === "collection"
              ? collection(reference, path, ...(pathSegments || []))
              : collection(reference, path, ...(pathSegments || []));
    }, [path, reference?.path, pathSegments]);
};
