[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useGetDocData

# Function: useGetDocData()

```ts
function useGetDocData<AppModelType>(__namedParameters): UseQueryResult<AppModelType, Error>
```

Defined in: [react-native/firestore/useGetDocData.ts:26](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useGetDocData.ts#L26)

Custom React Hook to retrieve document data from Firestore using specified parameters.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### \_\_namedParameters

`UseGetDocOptions`\<`AppModelType`\>

## Returns

`UseQueryResult`\<`AppModelType`, `Error`\>

Result of the query containing document data and query status.
