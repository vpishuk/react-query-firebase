[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseRunTransactionOptions

# Type Alias: UseRunTransactionOptions\<T, TContext\>

```ts
type UseRunTransactionOptions<T, TContext> = object;
```

Defined in: [react-native/firestore/useRunTransaction.ts:14](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useRunTransaction.ts#L14)

## Type Parameters

### T

`T` = `unknown`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<T, Error, <T>(transaction) => T, TContext>, "mutationFn">;
```

Defined in: [react-native/firestore/useRunTransaction.ts:18](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useRunTransaction.ts#L18)

Reqct-mutation options that shall omit mutationFn
