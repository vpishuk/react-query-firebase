import { getDocs, FirebaseFirestoreTypes, query, or, and, QueryConstraint } from "@react-native-firebase/firestore";

import { useCallback } from "react";
import { AppModel } from "../../types/index.js";
import { type NonFilterQueryConstraint } from "../../types/QueryConstraints.js";
import { buildCompositeFilter, QueryFilterConstraint, type CompositeFilter } from "./utils/buildCompositeFilter.js";
import { buildQueryConstraint } from "./utils/buildQueryConstraint.js";

/**
 * @inline
 */
type UseFirestoreQueryEngineOptions<AppModelType extends AppModel = AppModel> = {
    /**
     * Reference to a Firestore collection
     */
    collectionReference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;

    /**
     * Non composite filter constraints such as limit, order, where
     */
    queryConstraints?: NonFilterQueryConstraint<AppModelType>[];

    /**
     * Composite filter
     */
    compositeFilter?: CompositeFilter<AppModelType>;
};

/**
 * Returns an async wrapper around native firestore query engine.
 *
 * @group Hook
 *
 * @returns {(options: UseFirestoreQueryEngineOptions<AppModelType>): Promise<AppModelType[]>} A function to execute firestore query
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const query = useFirestoreQueryEngine();
 *  const callback = useCallback(async () => {
 *      const docs = await query({
 *          collectionReference: collection(),
 *          queryConstraints: [],
 *      });
 *      // do something with docs
 *  });
 * };
 * ```
 */
export const useFirestoreQueryEngine = <AppModelType extends AppModel = AppModel>(): ((
    options: UseFirestoreQueryEngineOptions<AppModelType>
) => Promise<AppModelType[]>) => {
    return useCallback(
        async ({
            collectionReference,
            queryConstraints = [],
            compositeFilter: inputCompositeFilter
        }: UseFirestoreQueryEngineOptions<AppModelType>) => {
            const compositeFilter =
                inputCompositeFilter?.children?.map?.((subQuery) => buildCompositeFilter(subQuery))
                    ?.filter<QueryFilterConstraint>?.((constraint) => !!constraint) ?? [];

            const finalCompositeFilter =
                compositeFilter.length > 0
                    ? inputCompositeFilter?.operator === "OR"
                        ? or(...compositeFilter)
                        : and(...compositeFilter)
                    : undefined;

            const queryToExecute = finalCompositeFilter
                ? query(collectionReference, finalCompositeFilter, ...queryConstraints.map(buildQueryConstraint))
                : query(collectionReference, ...(queryConstraints.map(buildQueryConstraint) as QueryConstraint[]));

            const querySnapshot = await getDocs<AppModelType, AppModelType>(queryToExecute);
            const docs: AppModelType[] = [];

            if (querySnapshot) {
                querySnapshot.forEach((doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
                    docs.push({ ...doc.data(), uid: doc.id } as AppModelType);
                });
            }
            return docs;
        },
        []
    );
};
