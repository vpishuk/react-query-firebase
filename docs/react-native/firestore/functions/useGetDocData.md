[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useGetDocData

# Function: useGetDocData()

```ts
function useGetDocData<AppModelType>(__namedParameters): UseQueryResult<AppModelType, Error>
```

Defined in: [react-native/firestore/useGetDocData.ts:26](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useGetDocData.ts#L26)

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
