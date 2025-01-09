[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseRunTransactionOptions

# Type Alias: UseRunTransactionOptions\<AppModelType, TContext\>

```ts
type UseRunTransactionOptions<AppModelType, TContext> = object;
```

Defined in: [src/firestore/useRunTransaction.ts:9](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useRunTransaction.ts#L9)

## Type Parameters

• **AppModelType** = `unknown`

• **TContext** = `unknown`

## Type declaration

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseRunTransactionValues, TContext>, "mutationFn">;
```
