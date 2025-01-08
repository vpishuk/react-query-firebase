[react-query-firebase](../../modules.md) / [firestore](../index.md) / useGetDocData

# Function: useGetDocData()

```ts
function useGetDocData<AppModelType, DbModelType>(__namedParameters): UseQueryResult<AppModelType, Error>
```

Defined in: [src/firestore/useGetDocData.ts:26](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useGetDocData.ts#L26)

Custom React Hook to retrieve document data from Firestore using specified parameters.

## Type Parameters

• **AppModelType** *extends* `DocumentData` = `DocumentData`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

## Parameters

### \_\_namedParameters

`UseGetDocOptions`\<`AppModelType`, `DbModelType`\>

## Returns

`UseQueryResult`\<`AppModelType`, `Error`\>

Result of the query containing document data and query status.
