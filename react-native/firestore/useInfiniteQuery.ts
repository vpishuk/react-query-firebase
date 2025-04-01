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
import { QueryFilterConstraint } from "./useCompositeFilter";
import { AppModel } from "../../types";

/**
 * @inline
 */
type UseInfiniteQueryOptions<
    AppModelType extends AppModel = AppModel,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown
> = {
    /**
     * Reqct-query options that must include queryKey and shall not define queryFn
     */
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

    /**
     * Reference to a Firestore collection
     */
    collectionReference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;

    /**
     * Non composite filter constraints such as limit, order, where
     */
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];

    /**
     * Composite filter
     */
    compositeFilter?: QueryFilterConstraint;
};

/**
 * Executes an infinite query on a Firestore data source and returns the resulting documents as an array.
 *
 * @group Hook
 *
 * @param {UseInfiniteQueryOptions<AppModelType, TQueryKey>} options - Configuration options for the query.
 *
 * @returns {UseInfiniteQueryResult<InfiniteData<AppModelType[]>>} An object containing documents that match the query.
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const docs = useInfiniteQuery({
 *      options: {
 *          queryKey: ['key']
 *      },
 *      collectionReference: collection(),
 *  });
 *  console.log(docs);
 * };
 * ```
 */
export const useInfiniteQuery = <
    AppModelType extends AppModel = AppModel,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown
>({
    options,
    collectionReference,
    queryConstraints = [],
    compositeFilter
}: UseInfiniteQueryOptions<AppModelType, TQueryKey, TPageParam>): UseInfiniteQueryResult<
    InfiniteData<AppModelType[]>
> => {
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
