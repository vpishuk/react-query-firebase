[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useDeleteDocMutation

# Function: useDeleteDocMutation()

```ts
function useDeleteDocMutation<AppModelType, TContext>(options): UseMutationResult<void, NativeFirebaseError, void, TContext>
```

Defined in: [react-native/firestore/useDeleteDocMutation.ts:29](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useDeleteDocMutation.ts#L29)

A custom hook that provides a mutation function to delete a document from the database.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Parameters

### options

[`UseDeleteDocMutationOptions`](../type-aliases/UseDeleteDocMutationOptions.md)\<`AppModelType`, `TContext`\>

An object containing the reference to the document and additional options for the mutation.

## Returns

`UseMutationResult`\<`void`, `NativeFirebaseError`, `void`, `TContext`\>

An object returned by the `useMutation` hook which includes properties and methods to control the mutation's execution and track its state.
