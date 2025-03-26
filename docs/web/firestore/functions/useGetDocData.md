[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useGetDocData

# Function: useGetDocData()

```ts
function useGetDocData<AppModelType, DbModelType>(__namedParameters): UseQueryResult<AppModelType, Error>
```

Defined in: [web/firestore/useGetDocData.ts:26](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useGetDocData.ts#L26)

Custom React Hook to retrieve document data from Firestore using specified parameters.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### \_\_namedParameters

`UseGetDocOptions`\<`AppModelType`, `DbModelType`\>

## Returns

`UseQueryResult`\<`AppModelType`, `Error`\>

Result of the query containing document data and query status.
