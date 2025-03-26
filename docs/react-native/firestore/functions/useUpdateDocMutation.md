[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useUpdateDocMutation

# Function: useUpdateDocMutation()

```ts
function useUpdateDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType, NativeFirebaseError, UseUpdateDocMutationValues<AppModelType>, TContext>
```

Defined in: [react-native/firestore/useUpdateDocMutation.ts:46](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useUpdateDocMutation.ts#L46)

Custom hook that sets up a mutation for updating a document in a Firestore database.

This hook utilizes `useMutation` for performing asynchronous operations to update the document
and retrieve the latest data snapshot. The update functionality can be configured with a custom
converter if needed.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Parameters

### options

[`UseUpdateDocMutationOptions`](../type-aliases/UseUpdateDocMutationOptions.md)\<`AppModelType`, `TContext`\>

Configuration options for the mutation,
including Firestore reference, an optional Firestore data converter, and additional mutation options.

`reference` - The Firestore document reference that identifies the document to be updated.

`converter` - An optional Firestore converter for transforming the database response into a custom type.

`options` - Additional options that customize the mutation's behavior.

## Returns

`UseMutationResult`\<`AppModelType`, `NativeFirebaseError`, [`UseUpdateDocMutationValues`](../type-aliases/UseUpdateDocMutationValues.md)\<`AppModelType`\>, `TContext`\>

An object returned by `useMutation`
which includes functions to start the mutation and properties that represent the different states of the mutation.
