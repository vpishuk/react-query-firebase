[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseRunTransactionOptions

# Type Alias: UseRunTransactionOptions\<AppModelType, TContext\>

```ts
type UseRunTransactionOptions<AppModelType, TContext> = object;
```

Defined in: [react-native/firestore/useRunTransaction.ts:11](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useRunTransaction.ts#L11)

## Type Parameters

### AppModelType

`AppModelType` = `unknown`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, ReactNativeFirebase.NativeFirebaseError, UseRunTransactionValues, TContext>, "mutationFn">;
```

Defined in: [react-native/firestore/useRunTransaction.ts:12](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useRunTransaction.ts#L12)
