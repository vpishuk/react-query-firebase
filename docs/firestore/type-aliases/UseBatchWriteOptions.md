[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseBatchWriteOptions

# Type Alias: UseBatchWriteOptions\<TContext\>

```ts
type UseBatchWriteOptions<TContext> = object;
```

Defined in: [src/firestore/useBatchWrite.ts:9](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useBatchWrite.ts#L9)

## Type Parameters

• **TContext** = `unknown`

## Type declaration

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, UseBatchWriteVariables, TContext>, "mutationFn">;
```
