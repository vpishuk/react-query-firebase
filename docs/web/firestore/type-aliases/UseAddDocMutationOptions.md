[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseAddDocMutationOptions

# Type Alias: UseAddDocMutationOptions\<AppModelType, TContext\>

```ts
type UseAddDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [web/firestore/useAddDocMutation.ts:21](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useAddDocMutation.ts#L21)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Properties

### collectionReference

```ts
collectionReference: CollectionReference<AppModelType, AppModelType>;
```

Defined in: [web/firestore/useAddDocMutation.ts:25](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useAddDocMutation.ts#L25)

Reference to a collection where document must be added

***

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseAddDocMutationValues<AppModelType>, TContext>, "mutationFn">;
```

Defined in: [web/firestore/useAddDocMutation.ts:29](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useAddDocMutation.ts#L29)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
