import {
    FirebaseFirestoreTypes,
    getDocs,
    query,
    QueryConstraint,
    QueryNonFilterConstraint
} from "@react-native-firebase/firestore";

import {
    useInfiniteQuery as useInfiniteReactQuery,
    UseInfiniteQueryOptions as UseReactInfiniteQueryOptions,
    QueryKey,
    UseInfiniteQueryResult,
    InfiniteData
} from "@tanstack/react-query";

type UseInfiniteQueryOptions<
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown
> = {
    options: Omit<
        UseReactInfiniteQueryOptions<
            AppModelType[],
            Error,
            InfiniteData<AppModelType[]>,
            AppModelType[],
            TQueryKey,
            TPageParam
        >,
        "queryFn"
    > &
        Required<
            Pick<
                UseReactInfiniteQueryOptions<
                    AppModelType[],
                    Error,
                    InfiniteData<AppModelType[]>,
                    AppModelType[],
                    TQueryKey,
                    TPageParam
                >,
                "queryKey"
            >
        >;
    collectionReference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];
    compositeFilter?: FirebaseFirestoreTypes.QueryCompositeFilterConstraint;
};

/**
 * Custom hook that creates an infinite query using Firestore, allowing for query constraints, composite filters, and converters.
 * It fetches data in pages and can load more as required.
 *
 * @param {UseInfiniteQueryOptions<AppModelType, DbModelType>} options - Configuration options for the infinite query, including Firestore query reference, query constraints, composite filter, and data converter.
 * @returns {UseInfiniteQueryResult<InfiniteData<AppModelType[]>>} Result object containing the infinite data and methods for fetching more pages.
 */
export const useInfiniteQuery = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData
>({
    options,
    collectionReference,
    queryConstraints = [],
    compositeFilter
}: UseInfiniteQueryOptions<AppModelType>): UseInfiniteQueryResult<InfiniteData<AppModelType[]>> => {
    return useInfiniteReactQuery({
        ...options,
        queryFn: async ({ pageParam }) => {
            const allQueryConstraints = [...queryConstraints, ...(pageParam ? [pageParam] : [])];
            const queryToExecute = compositeFilter
                ? query(collectionReference, compositeFilter, ...(allQueryConstraints as QueryNonFilterConstraint[]))
                : query(collectionReference, ...allQueryConstraints);

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
