import {
    startAt,
    orderBy,
    limit,
    limitToLast,
    startAfter,
    endAt,
    endBefore,
    type QueryNonFilterConstraint
} from "@react-native-firebase/firestore";
import { useMemo } from "react";
import { AppModel } from "../../types/AppModel";
import { type NonFilterQueryConstraint } from "../../types/QueryConstraints";

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
 * A generic mothod to build query constraints for firebase
 *
 * @group Utility
 *
 * @param {NonFilterQueryConstraint<AppModelType>} constraint
 *
 * @returns {FirebaseFirestoreTypes.QueryNonFilterConstraint}
 *
 * @example
 * ```jsx
 * const firebaseConfig = {};
 * export const constraint = useMemo(() => {
 *  return buildQueryConstraint({
 *      type: 'limit',
 *      limit: 1
 *  });
 * };
 * ```
 */
export const buildQueryConstraint = <AppModelType extends AppModel = AppModel>(
    constraint: NonFilterQueryConstraint<AppModelType>
): QueryNonFilterConstraint => {
    switch (constraint.type) {
        case "orderBy":
            return orderBy(constraint.fieldPath as string, constraint.directionStr);
        case "startAt":
            return startAt(...constraint.arguments);
        case "startAfter":
            return startAfter(...constraint.arguments);
        case "endAt":
            return endAt(constraint.value, constraint.key);
        case "endBefore":
            return endBefore(constraint.value, constraint.key);
        case "limit":
            return limit(constraint.limit);
        case "limitToLast":
            return limitToLast(constraint.limit);
    }
};

/**
 * A hook to build a list of non-filter query constraints for firebase queries.
 * It uses buildQueryConstraint method and useMemo hook.
 *
 * @group Hook
 *
 * @param {UseQueryConstraints<AppModelType>} options
 *
 * @returns {FirebaseFirestoreTypes.QueryNonFilterConstraint}
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
