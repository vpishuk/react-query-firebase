import {
    DocumentData,
    QueryFilterConstraint,
    WhereFilterOp,
    QueryCompositeFilterConstraint,
    documentId,
    and,
    or,
    where
} from "firebase/firestore";
import { useMemo } from "react";

type CompositeFilterDocumentData = DocumentData;

export type QueryElement<DbModelType extends CompositeFilterDocumentData = CompositeFilterDocumentData> =
    Partial<QueryCompositeFilterConstraint> & {
        children?: QueryElement[];
        field?: keyof (DbModelType & { documentId?: string[] });
        value?: DbModelType[keyof DbModelType];
        op?: WhereFilterOp;
    };

export type CompositeFilter<DbModelType extends CompositeFilterDocumentData = CompositeFilterDocumentData> = {
    operator: "OR" | "AND";
    children: QueryElement<DbModelType & { documentId?: string[] }>[];
};

export type UseCompositeFilter<DbModelType extends CompositeFilterDocumentData = CompositeFilterDocumentData> = {
    query?: CompositeFilter<DbModelType>;
};

/**
 * Constructs a composite query filter based on the provided query structure.
 * It recursively builds query constraints using logical "or" or "and" operators.
 *
 * @param {QueryElement<DbModelType>} query - The query element or structure to be evaluated and transformed into filter constraints.
 * @returns {QueryFieldFilterConstraint | null} A constructed query filter constraint based on the input query, or null if no valid constraints can be derived.
 */

const buildCompositeQuery = <DbModelType extends CompositeFilterDocumentData = CompositeFilterDocumentData>(
    query: QueryElement<DbModelType>
): QueryFilterConstraint | null => {
    if (query.children) {
        const queryConstraints = query.children.map(buildCompositeQuery).filter((constraint) => !!constraint);

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
 * A custom hook that generates a composite filter for database queries, using the provided query configuration.
 * It applies either an 'OR' or 'AND' logical operation based on the type specified in the query.
 *
 * @param {Object} query - The query configuration object that contains subqueries and a type for logical combination.
 * @param {string} query.type - The type of composite operation ('or'/'and').
 * @param {Array} query.children - An array of subqueries that will be processed to form the composite filter.
 *
 * @returns {(Function|undefined)} A composite query filter constraint function formed by combining subqueries or undefined if there are no valid constraints.
 */
export const useCompositeFilter = <DbModelType extends CompositeFilterDocumentData = CompositeFilterDocumentData>({
    query
}: UseCompositeFilter<DbModelType>) => {
    return useMemo(() => {
        const queryConstraints =
            query?.children?.map?.((subQuery) => buildCompositeQuery(subQuery))?.filter<QueryFilterConstraint>?.(
                (constraint) => !!constraint
            ) ?? [];

        if (queryConstraints.length <= 0) {
            return undefined;
        }
        return query?.operator === "OR" ? or(...queryConstraints) : and(...queryConstraints);
    }, [query]);
};
