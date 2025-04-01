[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useSetDocMutation

# Function: useSetDocMutation()

```ts
function useSetDocMutation<AppModelType, TContext>(param0): UseMutationResult<void, NativeFirebaseError, UseSetDocMutationValues<AppModelType>, TContext>
```

Defined in: [react-native/firestore/useSetDocMutation.ts:36](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useSetDocMutation.ts#L36)

Custom hook to create a mutation for setting a document in a Firestore-like database.
The mutation can be configured with options and reference to specific document path.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Parameters

### param0

[`UseSetDocMutationOptions`](../type-aliases/UseSetDocMutationOptions.md)\<`AppModelType`, `TContext`\>

The options for configuring the mutation, including the document reference and additional mutation options.

## Returns

`UseMutationResult`\<`void`, `NativeFirebaseError`, [`UseSetDocMutationValues`](../type-aliases/UseSetDocMutationValues.md)\<`AppModelType`\>, `TContext`\>

The result of the mutation operation, which includes states like isLoading, isSuccess, isError, and methods to control the mutation process.
