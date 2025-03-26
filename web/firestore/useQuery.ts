import {
    DocumentData,
    FirestoreDataConverter,
    getDocs,
    CollectionReference,
    query,
    QueryCompositeFilterConstraint,
    QueryConstraint,
    QueryNonFilterConstraint
} from "firebase/firestore";

import {
    UseQueryResult,
    useQuery as useReactQuery,
    UseQueryOptions as UseReactQueryOptions
} from "@tanstack/react-query";

type UseQueryOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
> = {
    options: Omit<UseReactQueryOptions<AppModelType[], Error, AppModelType[]>, "queryFn"> &
        Required<Pick<UseReactQueryOptions<AppModelType[], Error, AppModelType[]>, "queryKey">>;
    collectionReference: CollectionReference<AppModelType, DbModelType>;
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];
    compositeFilter?: QueryCompositeFilterConstraint;
    converter?: FirestoreDataConverter<AppModelType, DbModelType>;
};

/**
 * Executes a query on a Firestore-like data source and returns the resulting documents as an array.
 *
 * This hook utilizes an abstraction over React Query to asynchronously fetch data based on the provided query
 * reference and constraints. It supports optional filtering, conversion, and additional query constraints.
 *
 * @param {UseQueryOptions<AppModelType, DbModelType>}  options - Configuration options for the query.
 * @param {DocumentReference<AppModelType>}  queryReference - The reference to the query to be executed.
 * @param {QueryConstraint[]}  queryConstraints - Additional constraints to fine-tune the query.
 * @param {QueryConstraint}  compositeFilter - Optional composite filter to apply to the query.
 * @param {FirestoreDataConverter<AppModelType>}  converter - Optional data converter for transforming snapshots.
 *
 * @returns {UseQueryResult<AppModelType[]>} Result containing an array of documents that match the query criteria.
 */
export const useQuery = <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    options,
    collectionReference,
    queryConstraints = [],
    compositeFilter,
    converter
}: UseQueryOptions<AppModelType, DbModelType>): UseQueryResult<AppModelType[]> => {
    return useReactQuery({
        ...options,
        queryFn: async () => {
            const queryToExecute = compositeFilter
                ? query(collectionReference, compositeFilter, ...(queryConstraints as QueryNonFilterConstraint[]))
                : query(collectionReference, ...queryConstraints);

            const querySnapshot = await getDocs(converter ? queryToExecute.withConverter(converter) : queryToExecute);
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
