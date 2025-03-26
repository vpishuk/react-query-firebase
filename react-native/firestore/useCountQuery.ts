import {
    FirebaseFirestoreTypes,
    getCountFromServer,
    query,
    QueryConstraint,
    QueryNonFilterConstraint
} from "@react-native-firebase/firestore";

import {
    UseQueryResult,
    useQuery as useReactQuery,
    UseQueryOptions as UseReactQueryOptions
} from "@tanstack/react-query";

type UseCountQueryOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
> = {
    options: Omit<UseReactQueryOptions<number, Error, number>, "queryFn"> &
        Required<Pick<UseReactQueryOptions<number, Error, number>, "queryKey">>;
    collectionReference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];
    compositeFilter?: FirebaseFirestoreTypes.QueryCompositeFilterConstraint;
};

/**
 * Executes a query with specified constraints and returns the count of matched documents.
 *
 * This function utilizes React Query to asynchronously fetch the count of documents from a server database
 * that match the provided query constraints and an optional composite filter.
 *
 * @param {UseCountQueryOptions<AppModelType>} options - Configuration options for the query.
 * @param {AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData} [options.options] - Additional options for the React Query.
 * @param {unknown} [options.query] - Reference to the query object to be executed.
 * @param {unknown[]} [options.queryConstraints=[]] - An array of constraints to apply to the query.
 * @param {unknown} [options.compositeFilter] - An optional composite filter to apply to the query.
 * @returns {UseQueryResult<number>} An object containing the number of documents that match the query.
 */

export const useCountQuery = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
    options,
    collectionReference,
    queryConstraints = [],
    compositeFilter
}: UseCountQueryOptions<AppModelType>): UseQueryResult<number> => {
    return useReactQuery({
        ...options,
        queryFn: async () => {
            const queryToExecute = compositeFilter
                ? query(collectionReference, compositeFilter, ...(queryConstraints as QueryNonFilterConstraint[]))
                : query(collectionReference, ...queryConstraints);

            const querySnapshot = await getCountFromServer(queryToExecute);
            if (querySnapshot) {
                return querySnapshot.data().count;
            }
            return 0;
        }
    });
};
