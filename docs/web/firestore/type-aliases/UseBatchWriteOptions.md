[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseBatchWriteOptions

# Type Alias: UseBatchWriteOptions

```ts
type UseBatchWriteOptions = object;
```

Defined in: [web/firestore/useBatchWrite.ts:15](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useBatchWrite.ts#L15)

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, (batch) => void | Promise<void>>, "mutationFn">;
```

Defined in: [web/firestore/useBatchWrite.ts:19](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useBatchWrite.ts#L19)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
