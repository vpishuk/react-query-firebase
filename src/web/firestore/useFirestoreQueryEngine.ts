import {
    getDocs,
    CollectionReference,
    query,
    QueryCompositeFilterConstraint,
    QueryConstraint,
    QueryNonFilterConstraint
} from "firebase/firestore";

import { useCallback } from "react";
import { AppModel } from "../../types/index.js";
import { QueryFilterConstraint } from "./utils/buildCompositeFilter.js";

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
    queryConstraints?: QueryConstraint[] | QueryNonFilterConstraint[];

    /**
     * Composite filter
     */
    compositeFilter?: QueryFilterConstraint;
};

/**
 * Returns an async wrapper around native firestore query engine.
 *
 * @group Hook
 *
 * @returns {(options: UseFirestoreQueryEngineOptions): Promise<AppModelType[]>} A function to execute firestore query
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
    options: UseFirestoreQueryEngineOptions
) => Promise<AppModelType[]>) => {
    return useCallback(
        async ({ collectionReference, queryConstraints = [], compositeFilter }: UseFirestoreQueryEngineOptions) => {
            const queryToExecute = compositeFilter
                ? query(
                      collectionReference,
                      compositeFilter as QueryCompositeFilterConstraint,
                      ...(queryConstraints as QueryNonFilterConstraint[])
                  )
                : query(collectionReference, ...queryConstraints);

            const querySnapshot = await getDocs(queryToExecute);
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
