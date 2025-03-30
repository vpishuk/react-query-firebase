[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / buildCompositeFilter

# Function: buildCompositeFilter()

```ts
function buildCompositeFilter<DbModelType>(query): null | QueryFilterConstraint
```

Defined in: [react-native/firestore/useCompositeFilter.ts:31](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useCompositeFilter.ts#L31)

Constructs a composite query filter based on the provided query structure.
It recursively builds query constraints using logical "or" or "and" operators.

## Type Parameters

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### query

[`QueryElement`](../type-aliases/QueryElement.md)\<`DbModelType`\>

The query element or structure to be evaluated and transformed into filter constraints.

## Returns

`null` \| `QueryFilterConstraint`

A constructed query filter constraint based on the input query, or null if no valid constraints can be derived.
