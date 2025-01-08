[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseRunTransactionOptions

# Type Alias: UseRunTransactionOptions\<AppModelType, TContext\>

```ts
type UseRunTransactionOptions<AppModelType, TContext> = object;
```

Defined in: [src/firestore/useRunTransaction.ts:9](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useRunTransaction.ts#L9)

## Type Parameters

• **AppModelType** = `unknown`

• **TContext** = `unknown`

## Type declaration

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseRunTransactionValues, TContext>, "mutationFn">;
```
