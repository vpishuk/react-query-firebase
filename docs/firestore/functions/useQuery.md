[react-query-firebase](../../modules.md) / [firestore](../index.md) / useQuery

# Function: useQuery()

```ts
function useQuery<AppModelType, DbModelType>(__namedParameters): UseQueryResult<AppModelType[]>
```

Defined in: [src/firestore/useQuery.ts:44](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useQuery.ts#L44)

Executes a query on a Firestore-like data source and returns the resulting documents as an array.

This hook utilizes an abstraction over React Query to asynchronously fetch data based on the provided query
reference and constraints. It supports optional filtering, conversion, and additional query constraints.

## Type Parameters

• **AppModelType** *extends* `DocumentData` = `DocumentData`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

## Parameters

### \_\_namedParameters

`UseQueryOptions`\<`AppModelType`, `DbModelType`\>

## Returns

`UseQueryResult`\<`AppModelType`[]\>

Result containing an array of documents that match the query criteria.
