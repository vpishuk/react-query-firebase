[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useAddDocMutation

# Function: useAddDocMutation()

```ts
function useAddDocMutation<AppModelType, DbModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, UseAddDocMutationValues<AppModelType>, TContext>
```

Defined in: [web/firestore/useAddDocMutation.ts:42](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useAddDocMutation.ts#L42)

Provides a mutation hook to add a document to a Firestore collection utilizing React Query's `useMutation`.
It handles addition and optional conversion of the document data in Firestore.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Parameters

### options

[`UseAddDocMutationOptions`](../type-aliases/UseAddDocMutationOptions.md)\<`AppModelType`, `DbModelType`, `TContext`\>

Options for the mutation hook

## Returns

`UseMutationResult`\<`AppModelType`, `FirebaseError`, [`UseAddDocMutationValues`](../type-aliases/UseAddDocMutationValues.md)\<`AppModelType`\>, `TContext`\>

The mutation hook result containing status, error, and data of the mutation process.
