import {
    DocumentData,
    QueryCompositeFilterConstraint,
    QueryFilterConstraint,
    WhereFilterOp,
    and,
    documentId,
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

export type CompositeFilter<DbModelType extends CompositeFilterDocumentData = CompositeFilterDocumentData> =
    QueryCompositeFilterConstraint & {
        children: QueryElement<DbModelType & { documentId?: string[] }>[];
    };

export type UseCompositeFilter<DbModelType extends CompositeFilterDocumentData = CompositeFilterDocumentData> = {
    query?: CompositeFilter<DbModelType>;
};

const buildCompositeQuery = <DbModelType extends CompositeFilterDocumentData = CompositeFilterDocumentData>(
    query: QueryElement<DbModelType>
): QueryFilterConstraint | null => {
    if (query.children) {
        const queryConstraints = query.children
            .map((subQuery) => buildCompositeQuery(subQuery))
            .filter<QueryFilterConstraint>((constraint) => !!constraint);

        if (queryConstraints.length <= 0) {
            return null;
        }

        return (query as CompositeFilter).type === "or" ? or(...queryConstraints) : and(...queryConstraints);
    }

    if (query.field && query.op) {
        return where(query.field === "documentId" ? documentId() : (query.field as string), query.op, query.value);
    }

    return null;
};

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
        return query?.type === "or" ? or(...queryConstraints) : and(...queryConstraints);
    }, [query]);
};
