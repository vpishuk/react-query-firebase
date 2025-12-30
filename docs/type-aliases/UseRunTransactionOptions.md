[react-query-firebase](../globals.md) / UseRunTransactionOptions

# Type Alias: UseRunTransactionOptions\<T, TContext\>

```ts
type UseRunTransactionOptions<T, TContext> = object;
```

Defined in: [src/web/firestore/useRunTransaction.ts:15](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useRunTransaction.ts#L15)

## Type Parameters

### T

`T` = `unknown`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<T, FirebaseError, <T>(transaction) => T, TContext>, "mutationFn">;
```

Defined in: [src/web/firestore/useRunTransaction.ts:19](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useRunTransaction.ts#L19)

Reqct-mutation options that shall omit mutationFn
