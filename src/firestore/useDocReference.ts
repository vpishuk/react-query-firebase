import { doc, CollectionReference, DocumentData, DocumentReference, Firestore } from "firebase/firestore";

import { useEffect, useRef } from "react";
import { useFirestore } from "../useFirestore";

export type UseDocReferenceOptions<AppModelType, DbModelType extends DocumentData = DocumentData> = {
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
    path?: string;
    pathSegments?: string[];
};

const getDocReference = <AppModelType, DbModelType extends DocumentData = DocumentData>(
    db: Firestore,
    { path, pathSegments, reference }: UseDocReferenceOptions<AppModelType, DbModelType>
) => {
    if (!path) {
        return null;
    }

    return (
        !reference
            ? doc(db, path || "", ...(pathSegments || []))
            : reference.type === "collection"
              ? doc(reference, path, ...(pathSegments || []))
              : doc(reference, path, ...(pathSegments || []))
    ) as DocumentReference<AppModelType, DbModelType>;
};

export const useDocReference = <AppModelType, DbModelType extends DocumentData = DocumentData>({
    path,
    reference,
    pathSegments
}: UseDocReferenceOptions<AppModelType, DbModelType>) => {
    const db = useFirestore();
    const ref = useRef<DocumentReference<AppModelType, DbModelType> | null>(
        getDocReference(db, { path, pathSegments, reference })
    );

    useEffect(() => {
        ref.current = getDocReference(db, { path, pathSegments, reference });
    }, [path, reference, pathSegments]);

    return ref.current;
};
