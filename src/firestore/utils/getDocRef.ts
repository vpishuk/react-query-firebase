import { CollectionReference, doc, DocumentData, DocumentReference, Firestore } from "firebase/firestore";

export type GetDocRefOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
> = {
    db: Firestore;
    reference?: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
    path?: string;
    pathSegments?: string[];
};

export const getDocRef = async <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    db,
    reference,
    path,
    pathSegments
}: GetDocRefOptions<AppModelType, DbModelType>) => {
    if (!reference && !path) {
        throw new Error("One of the options must be provided: path or reference.");
    }

    const docRef = !reference
        ? doc(db, path as string, ...(pathSegments || []))
        : reference.type === "collection"
          ? doc(reference, path, ...(pathSegments || []))
          : reference.type === "document"
            ? doc(reference, path as string, ...(pathSegments || []))
            : null;

    return docRef as DocumentReference<AppModelType, DbModelType>;
};
