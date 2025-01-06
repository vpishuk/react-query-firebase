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
    query: Query<AppModelType, DbModelType>;
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];
    compositeFilter?: QueryCompositeFilterConstraint;
    converter?: FirestoreDataConverter<AppModelType, DbModelType>;
};

export const useQuery = <
    AppModelType extends DocumentData = DocumentData,
    DbModelType extends DocumentData = DocumentData
>({
    options,
    query: queryReference,
    queryConstraints = [],
    compositeFilter,
    converter
}: UseQueryOptions<AppModelType, DbModelType>): UseQueryResult<AppModelType[]> => {
    return useReactQuery({
        ...options,
        queryFn: async () => {
            const queryToExecute = compositeFilter
                ? query(queryReference, compositeFilter, ...(queryConstraints as QueryNonFilterConstraint[]))
                : query(queryReference, ...queryConstraints);

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
