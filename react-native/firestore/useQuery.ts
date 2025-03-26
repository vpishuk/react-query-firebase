import {
    FirebaseFirestoreTypes,
    getDocs,
    query,
    QueryConstraint,
    QueryNonFilterConstraint
} from "@react-native-firebase/firestore";

import {
    UseQueryResult,
    useQuery as useReactQuery,
    UseQueryOptions as UseReactQueryOptions
} from "@tanstack/react-query";

type UseQueryOptions<AppModelType extends FirebaseFirestoreTypes.DocumentData> = {
    options: Omit<UseReactQueryOptions<AppModelType[], Error, AppModelType[]>, "queryFn"> &
        Required<Pick<UseReactQueryOptions<AppModelType[], Error, AppModelType[]>, "queryKey">>;
    collectionReference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];
    compositeFilter?: FirebaseFirestoreTypes.QueryCompositeFilterConstraint;
};

/**
 * Executes a query on a Firestore-like data source and returns the resulting documents as an array.
 *
 * This hook utilizes an abstraction over React Query to asynchronously fetch data based on the provided query
 * reference and constraints. It supports optional filtering, conversion, and additional query constraints.
 *
 * @param {UseQueryOptions<AppModelType>}  options - Configuration options for the query.
 * @param {FirebaseFirestoreTypes.DocumentReference<AppModelType>}  collectionReference - The reference to the query to be executed.
 * @param {QueryConstraint[]}  queryConstraints - Additional constraints to fine-tune the query.
 * @param {QueryConstraint}  compositeFilter - Optional composite filter to apply to the query.
 * @param {FirestoreDataConverter<AppModelType>}  converter - Optional data converter for transforming snapshots.
 *
 * @returns {UseQueryResult<AppModelType[]>} Result containing an array of documents that match the query criteria.
 */
export const useQuery = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
    options,
    collectionReference,
    queryConstraints = [],
    compositeFilter
}: UseQueryOptions<AppModelType>): UseQueryResult<AppModelType[]> => {
    return useReactQuery({
        ...options,
        queryFn: async () => {
            const queryToExecute = compositeFilter
                ? query(collectionReference, compositeFilter, ...(queryConstraints as QueryNonFilterConstraint[]))
                : query(collectionReference, ...queryConstraints);

            const querySnapshot = await getDocs(queryToExecute);
            const docs: AppModelType[] = [];

            if (querySnapshot) {
                querySnapshot.forEach((doc) => {
                    docs.push(doc.data());
                });
            }
            return docs;
        }
    });
};
