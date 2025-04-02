import {
    getCountFromServer,
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
import { QueryFilterConstraint } from "./utils/buildCompositeFilter";
import { AppModel } from "../../types";

/**
 * @inline
 */
type UseCountQueryOptions<AppModelType extends AppModel = AppModel> = {
    /**
     * Reqct-query options that must include queryKey and shall not define queryFn
     */
    options: Omit<UseReactQueryOptions<number, Error, number>, "queryFn"> &
        Required<Pick<UseReactQueryOptions<number, Error, number>, "queryKey">>;

    /**
     * Reference to a Firestore collection
     */
    collectionReference: CollectionReference<AppModelType, AppModelType>;

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
 * Executes a query with specified constraints and returns the count of matched documents.
 *
 * @group Hook
 *
 * @param {UseCountQueryOptions<AppModelType>} options - Configuration options for the query.
 *
 * @returns {UseQueryResult<number>} An object containing the number of documents that match the query.
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const count = useCountQuery({
 *      options: {
 *          queryKey: ['key']
 *      },
 *      collectionReference: collection(),
 *  });
 *  console.log(count);
 * };
 * ```
 */
export const useCountQuery = <AppModelType extends AppModel = AppModel>({
    options,
    collectionReference,
    queryConstraints = [],
    compositeFilter
}: UseCountQueryOptions<AppModelType>): UseQueryResult<number> => {
    return useReactQuery({
        ...options,
        queryFn: async () => {
            const queryToExecute = compositeFilter
                ? query(
                      collectionReference,
                      compositeFilter as QueryCompositeFilterConstraint,
                      ...(queryConstraints as QueryNonFilterConstraint[])
                  )
                : query(collectionReference, ...queryConstraints);

            const querySnapshot = await getCountFromServer(queryToExecute);
            if (querySnapshot) {
                return querySnapshot.data().count;
            }
            return 0;
        }
    });
};
