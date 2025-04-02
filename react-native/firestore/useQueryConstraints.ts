import { type QueryNonFilterConstraint } from "@react-native-firebase/firestore";
import { useMemo } from "react";
import { AppModel } from "../../types/AppModel";
import { type NonFilterQueryConstraint } from "../../types/QueryConstraints";
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
