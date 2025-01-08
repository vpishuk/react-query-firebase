[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseRunTransactionOptions

# Type Alias: UseRunTransactionOptions\<AppModelType, TContext\>

```ts
type UseRunTransactionOptions<AppModelType, TContext> = object;
```

Defined in: [src/firestore/useRunTransaction.ts:9](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useRunTransaction.ts#L9)

## Type Parameters

• **AppModelType** = `unknown`

• **TContext** = `unknown`

## Type declaration

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseRunTransactionValues, TContext>, "mutationFn">;
```
