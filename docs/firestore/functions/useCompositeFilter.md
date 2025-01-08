[react-query-firebase](../../modules.md) / [firestore](../index.md) / useCompositeFilter

# Function: useCompositeFilter()

```ts
function useCompositeFilter<DbModelType>(query): undefined | QueryCompositeFilterConstraint
```

Defined in: [src/firestore/useCompositeFilter.ts:72](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useCompositeFilter.ts#L72)

A custom hook that generates a composite filter for database queries, using the provided query configuration.
It applies either an 'OR' or 'AND' logical operation based on the type specified in the query.

## Type Parameters

• **DbModelType** *extends* `DocumentData` = `DocumentData`

## Parameters

### query

[`UseCompositeFilter`](../type-aliases/UseCompositeFilter.md)\<`DbModelType`\>

The query configuration object that contains subqueries and a type for logical combination.

## Returns

`undefined` \| `QueryCompositeFilterConstraint`

A composite query filter constraint function formed by combining subqueries or undefined if there are no valid constraints.
