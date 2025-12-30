[react-query-firebase](../globals.md) / UseAddDocMutationOptions

# Type Alias: UseAddDocMutationOptions\<AppModelType, TContext\>

```ts
type UseAddDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [src/web/firestore/useAddDocMutation.ts:21](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useAddDocMutation.ts#L21)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)

### TContext

`TContext` = `unknown`

## Properties

### collectionReference

```ts
collectionReference: CollectionReference<AppModelType, AppModelType>;
```

Defined in: [src/web/firestore/useAddDocMutation.ts:25](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useAddDocMutation.ts#L25)

Reference to a collection where document must be added

***

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseAddDocMutationValues<AppModelType>, TContext>, "mutationFn">;
```

Defined in: [src/web/firestore/useAddDocMutation.ts:29](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useAddDocMutation.ts#L29)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
