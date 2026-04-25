import {
    CollectionReference,
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
import { QueryCompositeFilterConstraint } from "firebase/firestore";
import { AppModel } from "../../types/index.js";

/**
 * @inline
 */
type UseQueryOptions<AppModelType extends AppModel = AppModel> = {
    /**
     * Reqct-query options that must include queryKey and shall not define queryFn
     */
    options: Omit<UseReactQueryOptions<AppModelType[], Error, AppModelType[]>, "queryFn"> &
        Required<Pick<UseReactQueryOptions<AppModelType[], Error, AppModelType[]>, "queryKey">>;

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
    compositeFilter?: QueryCompositeFilterConstraint | null;
};

/**
 * Executes a query on a Firestore data source and returns the resulting documents as an array.
 *
 * @group Hook
 *
 * @param {UseQueryOptions<AppModelType>} options - Configuration options for the query.
 *
 * @returns {UseQueryResult<AppModelType[]>} An object containing documents that match the query.
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const docs = useQuery({
 *      options: {
 *          queryKey: ['key']
 *      },
 *      collectionReference: collection(),
 *  });
 *  console.log(docs);
 * };
 * ```
 */
export const useQuery = <AppModelType extends AppModel = AppModel>({
    options,
    collectionReference,
    queryConstraints = [],
    compositeFilter
}: UseQueryOptions<AppModelType>): UseQueryResult<AppModelType[]> => {
    return useReactQuery({
        ...options,
        queryFn: async () => {
            const queryToExecute = query(
                collectionReference,
                ...([...(compositeFilter ? [compositeFilter] : []), ...queryConstraints] as QueryConstraint[])
            );

            const querySnapshot = await getDocs(queryToExecute);
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
