[react-query-firebase](../../modules.md) / [firestore](../index.md) / useDeleteDocMutation

# Function: useDeleteDocMutation()

```ts
function useDeleteDocMutation<AppModelType, DbModelType, TContext>(options): UseMutationResult<void, FirebaseError, void, TContext>
```

Defined in: [src/firestore/useDeleteDocMutation.ts:27](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useDeleteDocMutation.ts#L27)

A custom hook that provides a mutation function to delete a document from the database.

## Type Parameters

• **AppModelType** *extends* `DocumentData` = `DocumentData`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

• **TContext** = `unknown`

## Parameters

### options

[`UseDeleteDocMutationOptions`](../type-aliases/UseDeleteDocMutationOptions.md)\<`AppModelType`, `DbModelType`, `TContext`\>

An object containing the reference to the document and additional options for the mutation.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, `void`, `TContext`\>

An object returned by the `useMutation` hook which includes properties and methods to control the mutation's execution and track its state.
