import { QueryNonFilterConstraint } from "firebase/firestore";
import { AppModel } from "../../types/AppModel";
import { NonFilterQueryConstraint } from "../../types/QueryConstraints";
import { useMemo } from "react";
import { buildQueryConstraint } from "./utils/buildQueryConstraint";

/**
 * @inline
 */
export type UseQueryConstraints<AppModelType extends AppModel = AppModel> = {
    /**
     * A list of constraints such as limit, order, offset.
     */
    constraints: NonFilterQueryConstraint<AppModelType>[];
};

/**
 * A hook to build a list of non-filter query constraints for firebase queries.
 * It uses buildQueryConstraint method and useMemo hook.
 *
 * @group Hook
 *
 * @param {UseQueryConstraints<AppModelType>} constraints
 *
 * @returns {QueryNonFilterConstraint[]}
 *
 * @example
 * ```jsx
 * const firebaseConfig = {};
 * export const constraint = useQueryConstraints([
 *  {
 *      type: 'limit',
 *      limit: 1
 *  }
 * ]};
 * ```
 */
export const useQueryConstraints = <AppModelType extends AppModel = AppModel>({
    constraints
}: UseQueryConstraints<AppModelType>): QueryNonFilterConstraint[] => {
    return useMemo(() => {
        return constraints.map(buildQueryConstraint);
    }, [constraints]);
};
