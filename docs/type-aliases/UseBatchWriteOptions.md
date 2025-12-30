[react-query-firebase](../globals.md) / UseBatchWriteOptions

# Type Alias: UseBatchWriteOptions

```ts
type UseBatchWriteOptions = object;
```

Defined in: [src/web/firestore/useBatchWrite.ts:15](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useBatchWrite.ts#L15)

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, (batch) => void | Promise<void>>, "mutationFn">;
```

Defined in: [src/web/firestore/useBatchWrite.ts:19](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useBatchWrite.ts#L19)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
