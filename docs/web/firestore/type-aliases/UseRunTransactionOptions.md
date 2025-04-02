[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseRunTransactionOptions

# Type Alias: UseRunTransactionOptions\<T, TContext\>

```ts
type UseRunTransactionOptions<T, TContext> = object;
```

Defined in: [web/firestore/useRunTransaction.ts:15](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useRunTransaction.ts#L15)

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

Defined in: [web/firestore/useRunTransaction.ts:19](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useRunTransaction.ts#L19)

Reqct-mutation options that shall omit mutationFn
