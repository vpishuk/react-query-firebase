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
import { QueryFilterConstraint } from "./utils/buildCompositeFilter";
import { AppModel } from "../../types";

/**
 * @inline
 */
type UseInfiniteQueryOptions<AppModelType extends AppModel = AppModel, TQueryKey extends QueryKey = QueryKey> = {
    /**
     * Reqct-query options that must include queryKey and shall not define queryFn
     */
    options: Omit<
        UseReactInfiniteQueryOptions<
            AppModelType[],
            Error,
            InfiniteData<AppModelType[]>,
            TQueryKey,
            QueryNonFilterConstraint
        >,
        "queryFn"
    > &
        Required<
            Pick<
                UseReactInfiniteQueryOptions<
                    AppModelType[],
                    Error,
                    InfiniteData<AppModelType[]>,
                    TQueryKey,
                    QueryNonFilterConstraint
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
export const useInfiniteQuery = <AppModelType extends AppModel = AppModel, TQueryKey extends QueryKey = QueryKey>({
    options,
    collectionReference,
    queryConstraints = [],
    compositeFilter
}: UseInfiniteQueryOptions<AppModelType, TQueryKey>): UseInfiniteQueryResult<InfiniteData<AppModelType[]>> => {
    return useInfiniteReactQuery({
        ...options,
        queryFn: async ({ pageParam }) => {
            const allQueryConstraints = [...queryConstraints, ...(pageParam ? [pageParam] : [])];
            const queryToExecute = compositeFilter
                ? query(collectionReference, compositeFilter, ...(allQueryConstraints as QueryNonFilterConstraint[]))
                : query(collectionReference, ...(allQueryConstraints as QueryConstraint[]));

            const querySnapshot: FirebaseFirestoreTypes.QuerySnapshot<AppModelType> = await getDocs<
                AppModelType,
                AppModelType
            >(queryToExecute);
            const docs: AppModelType[] = [];

            if (querySnapshot) {
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), uid: doc.id });
                });
            }
            return docs;
        }
    });
};
