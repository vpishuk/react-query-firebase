[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useSetDocMutation

# Function: useSetDocMutation()

```ts
function useSetDocMutation<AppModelType, DbModelType, TContext>(param0): UseMutationResult<void, FirebaseError, UseSetDocMutationValues<AppModelType>, TContext>
```

Defined in: [web/firestore/useSetDocMutation.ts:32](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useSetDocMutation.ts#L32)

Custom hook to create a mutation for setting a document in a Firestore-like database.
The mutation can be configured with options and reference to specific document path.

## Type Parameters

### AppModelType

`AppModelType` = `unknown`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Parameters

### param0

[`UseSetDocMutationOptions`](../type-aliases/UseSetDocMutationOptions.md)\<`AppModelType`, `DbModelType`, `TContext`\>

The options for configuring the mutation, including the document reference and additional mutation options.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, [`UseSetDocMutationValues`](../type-aliases/UseSetDocMutationValues.md)\<`AppModelType`\>, `TContext`\>

The result of the mutation operation, which includes states like isLoading, isSuccess, isError, and methods to control the mutation process.
