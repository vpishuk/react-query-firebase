import {
    DocumentData,
    getCountFromServer,
    Query,
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

type UseCountQueryOptions<
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
> = {
    options: Omit<UseReactQueryOptions<number, Error, number>, "queryFn"> &
        Required<Pick<UseReactQueryOptions<number, Error, number>, "queryKey">>;
    query: Query<AppModelType, DbModelType>;
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];
    compositeFilter?: QueryCompositeFilterConstraint;
};

export const useCountQuery = <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    options,
    query: queryReference,
    queryConstraints = [],
    compositeFilter
}: UseCountQueryOptions<AppModelType, DbModelType>): UseQueryResult<number> => {
    return useReactQuery({
        ...options,
        queryFn: async () => {
            const queryToExecute = compositeFilter
                ? query(queryReference, compositeFilter, ...(queryConstraints as QueryNonFilterConstraint[]))
                : query(queryReference, ...queryConstraints);

            const querySnapshot = await getCountFromServer(queryToExecute);
            if (querySnapshot) {
                return querySnapshot.data().count;
            }
            return 0;
        }
    });
};
