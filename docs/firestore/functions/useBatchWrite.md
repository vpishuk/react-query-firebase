[react-query-firebase](../../modules.md) / [firestore](../index.md) / useBatchWrite

# Function: useBatchWrite()

```ts
function useBatchWrite<TContext>(options): UseMutationResult<void, FirebaseError, UseBatchWriteVariables, TContext>
```

Defined in: [src/firestore/useBatchWrite.ts:20](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useBatchWrite.ts#L20)

Custom hook to perform batch write operations using Firestore.
Utilizes a mutation to carry out the batch write transaction.

## Type Parameters

• **TContext** = `unknown`

The type of context that can be passed into the hook, defaults to unknown.

## Parameters

### options

[`UseBatchWriteOptions`](../type-aliases/UseBatchWriteOptions.md)\<`TContext`\> = `{}`

The configuration options for the mutation operation.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, [`UseBatchWriteVariables`](../type-aliases/UseBatchWriteVariables.md), `TContext`\>

Returns an object composed of elements returned by useMutation, including properties such as status, and functions to trigger and control the mutation process.
