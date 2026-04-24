import { getDocs, CollectionReference, query, QueryConstraint } from "@react-native-firebase/firestore";

import { useCallback } from "react";
import { AppModel } from "../../types/index.js";
import { type NonFilterQueryConstraint } from "../../types/QueryConstraints.js";
import { buildCompositeFilter, type CompositeFilter } from "./utils/buildCompositeFilter.js";
import { buildQueryConstraint } from "./utils/buildQueryConstraint.js";

/**
 * @inline
 */
type UseFirestoreQueryEngineOptions<AppModelType extends AppModel = AppModel> = {
    /**
     * Reference to a Firestore collection
     */
    collectionReference: CollectionReference<AppModelType, AppModelType>;

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
            const compositeFilter = inputCompositeFilter ? buildCompositeFilter(inputCompositeFilter) : null;
            const builtQueryConstraints = queryConstraints.map(buildQueryConstraint);

            const queryToExecute = query(
                collectionReference,
                ...([...(compositeFilter ? [compositeFilter] : []), ...builtQueryConstraints] as QueryConstraint[])
            );

            const querySnapshot = await getDocs<AppModelType, AppModelType>(queryToExecute);
            const docs: AppModelType[] = [];

            if (querySnapshot) {
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), uid: doc.id } as AppModelType);
                });
            }
            return docs;
        },
        []
    );
};
