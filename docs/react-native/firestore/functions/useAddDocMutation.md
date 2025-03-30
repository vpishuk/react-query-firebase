[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useAddDocMutation

# Function: useAddDocMutation()

```ts
function useAddDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType, NativeFirebaseError, UseAddDocMutationValues<AppModelType>, TContext>
```

Defined in: [react-native/firestore/useAddDocMutation.ts:37](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useAddDocMutation.ts#L37)

Provides a mutation hook to add a document to a Firestore collection utilizing React Query's `useMutation`.
It handles addition and optional conversion of the document data in Firestore.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Parameters

### options

[`UseAddDocMutationOptions`](../type-aliases/UseAddDocMutationOptions.md)\<`AppModelType`, `TContext`\>

Options for the mutation hook

## Returns

`UseMutationResult`\<`AppModelType`, `NativeFirebaseError`, [`UseAddDocMutationValues`](../type-aliases/UseAddDocMutationValues.md)\<`AppModelType`\>, `TContext`\>

The mutation hook result containing status, error, and data of the mutation process.
