[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseUpdateDocMutationOptions

# Type Alias: UseUpdateDocMutationOptions\<AppModelType, TContext\>

```ts
type UseUpdateDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [web/firestore/useUpdateDocMutation.ts:21](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useUpdateDocMutation.ts#L21)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseUpdateDocMutationValues<AppModelType>, TContext>, "mutationFn">;
```

Defined in: [web/firestore/useUpdateDocMutation.ts:29](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useUpdateDocMutation.ts#L29)

Options for useMutation hook excluding mutationFn.

***

### reference

```ts
reference: DocumentReference<AppModelType, AppModelType> | null;
```

Defined in: [web/firestore/useUpdateDocMutation.ts:25](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useUpdateDocMutation.ts#L25)

Reference to a document that must be updated
