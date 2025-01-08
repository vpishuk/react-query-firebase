import { CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";

import { useFirestore } from "./useFirestore";
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

/**
 * Custom React Hook to retrieve document data from Firestore using specified parameters.
 * @param {Object} options - The options for configuring the Firestore query.
 * @param {string} reference - The reference to the document in Firestore.
 * @param {string} path - The path to the document in Firestore.
 * @param {Array<string>} pathSegments - Segments of the path to document in Firestore.
 * @returns {Object} Result of the query containing document data and query status.
 */
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
