[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseRunTransactionOptions

# Type Alias: UseRunTransactionOptions\<AppModelType, TContext\>

```ts
type UseRunTransactionOptions<AppModelType, TContext> = object;
```

Defined in: [web/firestore/useRunTransaction.ts:9](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useRunTransaction.ts#L9)

## Type Parameters

### AppModelType

`AppModelType` = `unknown`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseRunTransactionValues, TContext>, "mutationFn">;
```

Defined in: [web/firestore/useRunTransaction.ts:10](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useRunTransaction.ts#L10)
