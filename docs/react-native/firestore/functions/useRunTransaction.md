[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useRunTransaction

# Function: useRunTransaction()

```ts
function useRunTransaction<AppModelType, TContext>(options): UseMutationResult<AppModelType, NativeFirebaseError, UseRunTransactionValues, TContext>
```

Defined in: [react-native/firestore/useRunTransaction.ts:25](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useRunTransaction.ts#L25)

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

`UseMutationResult`\<`AppModelType`, `NativeFirebaseError`, [`UseRunTransactionValues`](../type-aliases/UseRunTransactionValues.md), `TContext`\>

The result object from the useMutation hook, allowing to track the transaction state and outcome.
