import {
    type QueryNonFilterConstraint,
    orderBy,
    startAt,
    startAfter,
    endAt,
    endBefore,
    limit,
    limitToLast
} from "@react-native-firebase/firestore";
import { AppModel, type NonFilterQueryConstraint } from "../../../types";

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
        default:
            throw new Error(`Unsupported constaint ${JSON.stringify(constraint)}`);
    }
};
