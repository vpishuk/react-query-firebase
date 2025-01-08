[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseBatchWriteOptions

# Type Alias: UseBatchWriteOptions\<TContext\>

```ts
type UseBatchWriteOptions<TContext> = object;
```

Defined in: [src/firestore/useBatchWrite.ts:9](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useBatchWrite.ts#L9)

## Type Parameters

• **TContext** = `unknown`

## Type declaration

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, UseBatchWriteVariables, TContext>, "mutationFn">;
```
