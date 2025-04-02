[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseAddDocMutationOptions

# Type Alias: UseAddDocMutationOptions\<AppModelType, TContext\>

```ts
type UseAddDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [react-native/firestore/useAddDocMutation.ts:20](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useAddDocMutation.ts#L20)

## Type Parameters

### AppModelType

`AppModelType` *extends* `FirebaseFirestoreTypes.DocumentData` = `FirebaseFirestoreTypes.DocumentData`

### TContext

`TContext` = `unknown`

## Properties

### collectionReference

```ts
collectionReference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;
```

Defined in: [react-native/firestore/useAddDocMutation.ts:27](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useAddDocMutation.ts#L27)

Reference to a collection where document must be added

***

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, ReactNativeFirebase.NativeFirebaseError, UseAddDocMutationValues<AppModelType>, TContext>, "mutationFn">;
```

Defined in: [react-native/firestore/useAddDocMutation.ts:32](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useAddDocMutation.ts#L32)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
