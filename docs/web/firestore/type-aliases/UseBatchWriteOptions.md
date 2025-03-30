[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseBatchWriteOptions

# Type Alias: UseBatchWriteOptions\<TContext\>

```ts
type UseBatchWriteOptions<TContext> = object;
```

Defined in: [web/firestore/useBatchWrite.ts:9](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useBatchWrite.ts#L9)

## Type Parameters

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, UseBatchWriteVariables, TContext>, "mutationFn">;
```

Defined in: [web/firestore/useBatchWrite.ts:10](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useBatchWrite.ts#L10)
