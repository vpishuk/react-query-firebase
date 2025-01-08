[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseBatchWriteOptions

# Type Alias: UseBatchWriteOptions\<TContext\>

```ts
type UseBatchWriteOptions<TContext> = object;
```

Defined in: [src/firestore/useBatchWrite.ts:9](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useBatchWrite.ts#L9)

## Type Parameters

• **TContext** = `unknown`

## Type declaration

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, UseBatchWriteVariables, TContext>, "mutationFn">;
```
