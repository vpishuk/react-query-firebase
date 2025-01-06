import { DocumentData, getDoc as firestoreGetDoc } from "firebase/firestore";
import { getDocRef, GetDocRefOptions } from "./getDocRef";

export type GetDocSnapOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
> = GetDocRefOptions<AppModelType, DbModelType>;

export const getDocSnap = async <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    db,
    reference,
    path,
    pathSegments
}: GetDocSnapOptions<AppModelType, DbModelType>) => {
    const docRef = await getDocRef<AppModelType, DbModelType>({ db, reference, path, pathSegments });

    if (docRef) {
        return await firestoreGetDoc(docRef);
    }

    return null;
};
