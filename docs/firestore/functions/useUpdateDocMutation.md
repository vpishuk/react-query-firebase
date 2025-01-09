[react-query-firebase](../../modules.md) / [firestore](../index.md) / useUpdateDocMutation

# Function: useUpdateDocMutation()

```ts
function useUpdateDocMutation<AppModelType, DbModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, UseUpdateDocMutationValues<DbModelType>, TContext>
```

Defined in: [src/firestore/useUpdateDocMutation.ts:50](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useUpdateDocMutation.ts#L50)

Custom hook that sets up a mutation for updating a document in a Firestore database.

This hook utilizes `useMutation` for performing asynchronous operations to update the document
and retrieve the latest data snapshot. The update functionality can be configured with a custom
converter if needed.

## Type Parameters

• **AppModelType** *extends* `DocumentData` = `DocumentData`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

• **TContext** = `unknown`

## Parameters

### options

[`UseUpdateDocMutationOptions`](../type-aliases/UseUpdateDocMutationOptions.md)\<`AppModelType`, `DbModelType`, `TContext`\>

Configuration options for the mutation,
including Firestore reference, an optional Firestore data converter, and additional mutation options.

`reference` - The Firestore document reference that identifies the document to be updated.

`converter` - An optional Firestore converter for transforming the database response into a custom type.

`options` - Additional options that customize the mutation's behavior.

## Returns

`UseMutationResult`\<`AppModelType`, `FirebaseError`, [`UseUpdateDocMutationValues`](../type-aliases/UseUpdateDocMutationValues.md)\<`DbModelType`\>, `TContext`\>

An object returned by `useMutation`
which includes functions to start the mutation and properties that represent the different states of the mutation.
