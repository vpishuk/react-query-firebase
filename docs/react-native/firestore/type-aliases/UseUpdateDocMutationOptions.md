[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseUpdateDocMutationOptions

# Type Alias: UseUpdateDocMutationOptions\<AppModelType, TContext\>

```ts
type UseUpdateDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [react-native/firestore/useUpdateDocMutation.ts:20](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useUpdateDocMutation.ts#L20)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, Error, UseUpdateDocMutationValues<AppModelType>, TContext>, "mutationFn">;
```

Defined in: [react-native/firestore/useUpdateDocMutation.ts:28](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useUpdateDocMutation.ts#L28)

Options for useMutation hook excluding mutationFn.

***

### reference

```ts
reference: FirebaseFirestoreTypes.DocumentReference<AppModelType> | null;
```

Defined in: [react-native/firestore/useUpdateDocMutation.ts:24](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useUpdateDocMutation.ts#L24)

Reference to a document that must be updated
