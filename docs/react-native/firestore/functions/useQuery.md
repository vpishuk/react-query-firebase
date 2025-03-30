[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useQuery

# Function: useQuery()

```ts
function useQuery<AppModelType>(__namedParameters): UseQueryResult<AppModelType[]>
```

Defined in: [react-native/firestore/useQuery.ts:37](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useQuery.ts#L37)

Executes a query on a Firestore-like data source and returns the resulting documents as an array.

This hook utilizes an abstraction over React Query to asynchronously fetch data based on the provided query
reference and constraints. It supports optional filtering, conversion, and additional query constraints.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### \_\_namedParameters

`UseQueryOptions`\<`AppModelType`\>

## Returns

`UseQueryResult`\<`AppModelType`[]\>

Result containing an array of documents that match the query criteria.
