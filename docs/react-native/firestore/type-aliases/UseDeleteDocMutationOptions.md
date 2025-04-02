[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseDeleteDocMutationOptions

# Type Alias: UseDeleteDocMutationOptions\<AppModelType, TContext\>

```ts
type UseDeleteDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [react-native/firestore/useDeleteDocMutation.ts:17](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useDeleteDocMutation.ts#L17)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<void, Error, void, TContext>, "mutationFn">;
```

Defined in: [react-native/firestore/useDeleteDocMutation.ts:25](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useDeleteDocMutation.ts#L25)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

***

### reference

```ts
reference: FirebaseFirestoreTypes.DocumentReference<AppModelType> | null;
```

Defined in: [react-native/firestore/useDeleteDocMutation.ts:21](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useDeleteDocMutation.ts#L21)

A reference to a firestore document
