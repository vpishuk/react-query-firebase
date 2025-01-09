[react-query-firebase](../../modules.md) / [firestore](../index.md) / useRunTransaction

# Function: useRunTransaction()

```ts
function useRunTransaction<AppModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, UseRunTransactionValues, TContext>
```

Defined in: [src/firestore/useRunTransaction.ts:20](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useRunTransaction.ts#L20)

Custom hook to execute a Firestore transaction using the useMutation hook.

## Type Parameters

• **AppModelType** = `unknown`

• **TContext** = `unknown`

## Parameters

### options

[`UseRunTransactionOptions`](../type-aliases/UseRunTransactionOptions.md)\<`AppModelType`, `TContext`\>

Configuration options for running the transaction.

## Returns

`UseMutationResult`\<`AppModelType`, `FirebaseError`, [`UseRunTransactionValues`](../type-aliases/UseRunTransactionValues.md), `TContext`\>

The result object from the useMutation hook, allowing to track the transaction state and outcome.
