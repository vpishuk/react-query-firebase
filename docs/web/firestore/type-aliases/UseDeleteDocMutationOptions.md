[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseDeleteDocMutationOptions

# Type Alias: UseDeleteDocMutationOptions\<AppModelType, TContext\>

```ts
type UseDeleteDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [web/firestore/useDeleteDocMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useDeleteDocMutation.ts#L18)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, void, TContext>, "mutationFn">;
```

Defined in: [web/firestore/useDeleteDocMutation.ts:26](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useDeleteDocMutation.ts#L26)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

***

### reference

```ts
reference: DocumentReference<AppModelType, AppModelType> | null;
```

Defined in: [web/firestore/useDeleteDocMutation.ts:22](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useDeleteDocMutation.ts#L22)

A reference to a firestore document
