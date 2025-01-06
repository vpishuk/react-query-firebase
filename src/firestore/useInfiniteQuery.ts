import {
    DocumentData,
    FirestoreDataConverter,
    getDocs,
    Query,
    query,
    QueryCompositeFilterConstraint,
    QueryConstraint,
    QueryNonFilterConstraint
} from "firebase/firestore";

import {
    useInfiniteQuery as useInfiniteReactQuery,
    UseInfiniteQueryOptions as UseReactInfiniteQueryOptions,
    QueryKey,
    UseInfiniteQueryResult,
    InfiniteData
} from "@tanstack/react-query";

type UseInfiniteQueryOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData,
    TQueryKey extends QueryKey = QueryKey
> = {
    options: Omit<
        UseReactInfiniteQueryOptions<
            AppModelType[],
            Error,
            InfiniteData<AppModelType[]>,
            AppModelType[],
            TQueryKey,
            QueryConstraint
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
                    QueryConstraint
                >,
                "queryKey"
            >
        >;
    query: Query<AppModelType, DbModelType>;
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];
    compositeFilter?: QueryCompositeFilterConstraint;
    converter?: FirestoreDataConverter<AppModelType, DbModelType>;
};

export const useInfiniteQuery = <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    options,
    query: queryReference,
    queryConstraints = [],
    compositeFilter,
    converter
}: UseInfiniteQueryOptions<AppModelType, DbModelType>): UseInfiniteQueryResult<InfiniteData<AppModelType[]>> => {
    return useInfiniteReactQuery({
        ...options,
        queryFn: async ({ pageParam }) => {
            const allQueryConstraints = [...queryConstraints, ...(pageParam ? [pageParam] : [])];
            const queryToExecute = compositeFilter
                ? query(queryReference, compositeFilter, ...(allQueryConstraints as QueryNonFilterConstraint[]))
                : query(queryReference, ...allQueryConstraints);

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
