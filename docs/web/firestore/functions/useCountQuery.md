[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useCountQuery

# Function: useCountQuery()

```ts
function useCountQuery<AppModelType, DbModelType>(options): UseQueryResult<number>
```

Defined in: [web/firestore/useCountQuery.ts:42](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useCountQuery.ts#L42)

Executes a query with specified constraints and returns the count of matched documents.

This function utilizes React Query to asynchronously fetch the count of documents from a server database
that match the provided query constraints and an optional composite filter.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### options

`UseCountQueryOptions`\<`AppModelType`, `DbModelType`\>

Configuration options for the query.

## Returns

`UseQueryResult`\<`number`\>

An object containing the number of documents that match the query.
