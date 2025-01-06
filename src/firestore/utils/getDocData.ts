import { DocumentData } from "firebase/firestore";
import { getDocSnap, GetDocSnapOptions } from "./getDocSnap";

export type GetDocDataOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
> = GetDocSnapOptions<AppModelType, DbModelType>;

export const getDocData = async <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    db,
    reference,
    path,
    pathSegments
}: GetDocDataOptions<AppModelType, DbModelType>) => {
    const docSnap = await getDocSnap<AppModelType, DbModelType>({ db, reference, path, pathSegments });

    if (docSnap && docSnap.exists()) {
        return docSnap.data();
    }

    return null;
};
