[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useCompositeFilter

# Function: useCompositeFilter()

```ts
function useCompositeFilter<DbModelType>(query): undefined | QueryCompositeFilterConstraint
```

Defined in: [react-native/firestore/useCompositeFilter.ts:65](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useCompositeFilter.ts#L65)

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
