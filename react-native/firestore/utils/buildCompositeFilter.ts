import { FirebaseFirestoreTypes, and, or, where, FieldPath } from "@react-native-firebase/firestore";
import { AppModel } from "../../../types";

export type QueryFilterConstraint =
    | FirebaseFirestoreTypes.QueryCompositeFilterConstraint
    | FirebaseFirestoreTypes.QueryFilterConstraint;

export type QueryElement<AppModelType extends AppModel = AppModel> = {
    operator?: "OR" | "AND";
    children?: QueryElement[];
    field?: keyof (AppModelType & { documentId?: string[] });
    value?: AppModelType[keyof AppModelType];
    op?: FirebaseFirestoreTypes.WhereFilterOp;
};

export type CompositeFilter<AppModelType extends AppModel = AppModel> = {
    operator: "OR" | "AND";
    children: QueryElement<AppModelType & { documentId?: string[] }>[];
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

        if (queryConstraints.length <= 1) {
            return queryConstraints[0];
        }

        return (query as CompositeFilter).operator === "OR" ? or(...queryConstraints) : and(...queryConstraints);
    }

    if (query.field && query.op) {
        return where(
            query.field === "documentId" ? new FieldPath("__name__") : (query.field as string),
            query.op,
            query.value
        ) as unknown as FirebaseFirestoreTypes.QueryFilterConstraint;
    }

    return null;
};
