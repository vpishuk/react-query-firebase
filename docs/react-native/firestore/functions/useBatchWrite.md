[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useBatchWrite

# Function: useBatchWrite()

```ts
function useBatchWrite<TContext>(options): UseMutationResult<void, NativeFirebaseError, UseBatchWriteVariables, TContext>
```

Defined in: [react-native/firestore/useBatchWrite.ts:23](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useBatchWrite.ts#L23)

Custom hook to perform batch write operations using Firestore.
Utilizes a mutation to carry out the batch write transaction.

## Type Parameters

### TContext

`TContext` = `unknown`

The type of context that can be passed into the hook, defaults to unknown.

## Parameters

### options

[`UseBatchWriteOptions`](../type-aliases/UseBatchWriteOptions.md)\<`TContext`\> = `{}`

The configuration options for the mutation operation.

## Returns

`UseMutationResult`\<`void`, `NativeFirebaseError`, [`UseBatchWriteVariables`](../type-aliases/UseBatchWriteVariables.md), `TContext`\>

Returns an object composed of elements returned by useMutation, including properties such as status, and functions to trigger and control the mutation process.
