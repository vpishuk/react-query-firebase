import { and, or } from "firebase/firestore";
import { useMemo } from "react";
import { AppModel } from "../../types";
import { CompositeFilter, buildCompositeFilter, QueryFilterConstraint } from "./utils/buildCompositeFilter";

/**
 * @inline
 */
export type UseCompositeFilter<AppModelType extends AppModel = AppModel> = {
    query?: CompositeFilter<AppModelType>;
};

/**
 * A custom hook that constructs a composite or where query filter based on the provided query structure.
 * It recursively builds query constraints using logical "or" or "and" operators.
 *
 * @group Hook
 *
 * @param {QueryElement<AppModelType>} query
 *
 * @returns {QueryFilterConstraint | null}
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const filter = useCompositeFilter({
 *      operator: "AND",
 *      children: [
 *          {
 *              field: "field",
 *              value: "value",
 *              op: "=="
 *          },
 *          ...(query ? [query] : [])
 *      ]
 *  });
 *  console.log(filter);
 * };
 * ```
 */
export const useCompositeFilter = <AppModelType extends AppModel = AppModel>({
    query
}: UseCompositeFilter<AppModelType>) => {
    return useMemo(() => {
        const queryConstraints =
            query?.children?.map?.((subQuery) => buildCompositeFilter(subQuery))?.filter<QueryFilterConstraint>?.(
                (constraint) => !!constraint
            ) ?? [];

        if (queryConstraints.length <= 0) {
            return undefined;
        }
        return query?.operator === "OR" ? or(...queryConstraints) : and(...queryConstraints);
    }, [query]);
};
