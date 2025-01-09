[react-query-firebase](../../modules.md) / [firestore](../index.md) / useAddDocMutation

# Function: useAddDocMutation()

```ts
function useAddDocMutation<AppModelType, DbModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, UseAddDocMutationValues<AppModelType>, TContext>
```

Defined in: [src/firestore/useAddDocMutation.ts:42](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useAddDocMutation.ts#L42)

Provides a mutation hook to add a document to a Firestore collection utilizing React Query's `useMutation`.
It handles addition and optional conversion of the document data in Firestore.

## Type Parameters

• **AppModelType** *extends* `DocumentData` = `DocumentData`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

• **TContext** = `unknown`

## Parameters

### options

[`UseAddDocMutationOptions`](../type-aliases/UseAddDocMutationOptions.md)\<`AppModelType`, `DbModelType`, `TContext`\>

Options for the mutation hook

## Returns

`UseMutationResult`\<`AppModelType`, `FirebaseError`, [`UseAddDocMutationValues`](../type-aliases/UseAddDocMutationValues.md)\<`AppModelType`\>, `TContext`\>

The mutation hook result containing status, error, and data of the mutation process.
