import { CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";

import { useFirestore } from "../useFirestore";
import { getDocData } from "./utils/getDocData";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseGetDocOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
> = {
    options: Omit<UseQueryOptions<AppModelType | null, Error, AppModelType>, "queryFn"> &
        Required<Pick<UseQueryOptions<AppModelType, Error, AppModelType>, "queryKey">>;
    path?: string;
    pathSegments?: string[];
    reference: CollectionReference<AppModelType, DbModelType> | DocumentReference<AppModelType, DbModelType>;
};

export const useGetDocData = <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    options,
    reference,
    path,
    pathSegments
}: UseGetDocOptions<AppModelType, DbModelType>) => {
    const db = useFirestore();

    return useQuery({
        ...options,
        queryFn: () => getDocData<AppModelType, DbModelType>({ db, reference, path, pathSegments })
    });
};
