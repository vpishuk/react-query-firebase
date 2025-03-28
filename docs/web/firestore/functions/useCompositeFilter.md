[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useCompositeFilter

# Function: useCompositeFilter()

```ts
function useCompositeFilter<DbModelType>(query): undefined | QueryCompositeFilterConstraint
```

Defined in: [web/firestore/useCompositeFilter.ts:70](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useCompositeFilter.ts#L70)

A custom hook that generates a composite filter for database queries, using the provided query configuration.
It applies either an 'OR' or 'AND' logical operation based on the type specified in the query.

## Type Parameters

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### query

[`UseCompositeFilter`](../type-aliases/UseCompositeFilter.md)\<`DbModelType`\>

The query configuration object that contains subqueries and a type for logical combination.

## Returns

`undefined` \| `QueryCompositeFilterConstraint`

A composite query filter constraint function formed by combining subqueries or undefined if there are no valid constraints.
