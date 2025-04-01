import {
    QueryFilterConstraint as FBQueryFilterConstraint,
    QueryCompositeFilterConstraint as FBQueryCompositeFilterConstraint,
    WhereFilterOp,
    documentId,
    and,
    or,
    where
} from "firebase/firestore";
import { useMemo } from "react";
import { AppModel } from "../../types";

export type QueryFilterConstraint = FBQueryFilterConstraint | FBQueryCompositeFilterConstraint;

export type QueryElement<AppModelType extends AppModel = AppModel> = {
    operator?: "OR" | "AND";
    children?: QueryElement[];
    field?: keyof (AppModelType & { documentId?: string[] });
    value?: AppModelType[keyof AppModelType];
    op?: WhereFilterOp;
};

export type CompositeFilter<AppModelType extends AppModel = AppModel> = {
    operator: "OR" | "AND";
    children: QueryElement<AppModelType & { documentId?: string[] }>[];
};

/**
 * @inline
 */
export type UseCompositeFilter<AppModelType extends AppModel = AppModel> = {
    query?: CompositeFilter<AppModelType>;
};

/**
 * Constructs a composite or where query filter based on the provided query structure.
 * It recursively builds query constraints using logical "or" or "and" operators.
 *
 * @group Utility
 *
 * @param {QueryElement<AppModelType>} query
 *
 * @returns {QueryFilterConstraint | null}
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const filter = buildCompositeFilter({
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
export const buildCompositeFilter = <AppModelType extends AppModel = AppModel>(
    query: QueryElement<AppModelType>
): QueryFilterConstraint | null => {
    if (query.children) {
        const queryConstraints = query.children.map(buildCompositeFilter).filter((constraint) => !!constraint);

        if (queryConstraints.length <= 0) {
            return null;
        }

        return (query as CompositeFilter).operator === "OR" ? or(...queryConstraints) : and(...queryConstraints);
    }

    if (query.field && query.op) {
        return where(query.field === "documentId" ? documentId() : (query.field as string), query.op, query.value);
    }

    return null;
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
