[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useUpdateDocMutation

# Function: useUpdateDocMutation()

```ts
function useUpdateDocMutation<AppModelType, DbModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, UseUpdateDocMutationValues<DbModelType>, TContext>
```

Defined in: [web/firestore/useUpdateDocMutation.ts:50](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useUpdateDocMutation.ts#L50)

Custom hook that sets up a mutation for updating a document in a Firestore database.

This hook utilizes `useMutation` for performing asynchronous operations to update the document
and retrieve the latest data snapshot. The update functionality can be configured with a custom
converter if needed.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

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
