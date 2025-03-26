import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

import { useFirestore } from "./useFirestore";
import { getDocData } from "./utils/getDocData";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseGetDocOptions<AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData> =
    {
        options: Omit<UseQueryOptions<AppModelType | null | undefined, Error, AppModelType>, "queryFn"> &
            Required<Pick<UseQueryOptions<AppModelType, Error, AppModelType>, "queryKey">>;
        path?: string;
        pathSegments?: string[];
        reference:
            | FirebaseFirestoreTypes.CollectionReference<AppModelType>
            | FirebaseFirestoreTypes.DocumentReference<AppModelType>;
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
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
    options,
    reference,
    path,
    pathSegments
}: UseGetDocOptions<AppModelType>) => {
    const db = useFirestore();

    return useQuery({
        ...options,
        queryFn: () => getDocData<AppModelType>({ db, reference, path, pathSegments })
    });
};
