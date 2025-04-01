[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useRunTransaction

# Function: useRunTransaction()

```ts
function useRunTransaction<AppModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, UseRunTransactionValues, TContext>
```

Defined in: [web/firestore/useRunTransaction.ts:20](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useRunTransaction.ts#L20)

Custom hook to execute a Firestore transaction using the useMutation hook.

## Type Parameters

### AppModelType

`AppModelType` = `unknown`

### TContext

`TContext` = `unknown`

## Parameters

### options

[`UseRunTransactionOptions`](../type-aliases/UseRunTransactionOptions.md)\<`AppModelType`, `TContext`\>

Configuration options for running the transaction.

## Returns

`UseMutationResult`\<`AppModelType`, `FirebaseError`, [`UseRunTransactionValues`](../type-aliases/UseRunTransactionValues.md), `TContext`\>

The result object from the useMutation hook, allowing to track the transaction state and outcome.
