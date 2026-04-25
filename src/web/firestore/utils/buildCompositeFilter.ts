import {
    WhereFilterOp,
    or,
    and,
    where,
    documentId,
    QueryFilterConstraint,
    QueryCompositeFilterConstraint
} from "firebase/firestore";
import { AppModel } from "../../../types/AppModel.js";

export type QueryElement<AppModelType extends AppModel = AppModel> = {
    field: keyof (AppModelType & { documentId?: string[] });
    value: AppModelType[keyof AppModelType];
    op: WhereFilterOp;
};

export type CompositeFilter<AppModelType extends AppModel = AppModel> = {
    operator: "OR" | "AND";
    children: Array<CompositeFilter<AppModelType> | QueryElement<AppModelType & { documentId?: string[] }>>;
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
    query: CompositeFilter<AppModelType> | QueryElement<AppModelType>
): QueryCompositeFilterConstraint | null => {
    if ((query as CompositeFilter<AppModelType>).children) {
        const queryConstraints = (query as CompositeFilter<AppModelType>).children
            .map(buildCompositeFilter)
            .filter((constraint) => !!constraint) as QueryFilterConstraint[];

        if (queryConstraints.length <= 0) {
            return null;
        }

        if (queryConstraints.length <= 1) {
            return and(queryConstraints[0]);
        }

        return (query as CompositeFilter<AppModelType>).operator === "OR"
            ? or(...queryConstraints)
            : and(...queryConstraints);
    }

    if ((query as QueryElement<AppModelType>).field && (query as QueryElement<AppModelType>).op) {
        return and(
            where(
                (query as QueryElement<AppModelType>).field === "documentId"
                    ? documentId()
                    : ((query as QueryElement<AppModelType>).field as string),
                (query as QueryElement<AppModelType>).op,
                (query as QueryElement<AppModelType>).value
            )
        );
    }

    return null;
};
