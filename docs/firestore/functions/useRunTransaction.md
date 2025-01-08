[react-query-firebase](../../modules.md) / [firestore](../index.md) / useRunTransaction

# Function: useRunTransaction()

```ts
function useRunTransaction<AppModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, UseRunTransactionValues, TContext>
```

Defined in: [src/firestore/useRunTransaction.ts:20](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useRunTransaction.ts#L20)

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
