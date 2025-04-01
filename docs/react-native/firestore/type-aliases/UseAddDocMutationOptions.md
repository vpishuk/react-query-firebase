[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseAddDocMutationOptions

# Type Alias: UseAddDocMutationOptions\<AppModelType, TContext\>

```ts
type UseAddDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [react-native/firestore/useAddDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useAddDocMutation.ts#L11)

## Type Parameters

### AppModelType

`AppModelType` *extends* `FirebaseFirestoreTypes.DocumentData` = `FirebaseFirestoreTypes.DocumentData`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, ReactNativeFirebase.NativeFirebaseError, UseAddDocMutationValues<AppModelType>, TContext>, "mutationFn" | "mutationKey">;
```

Defined in: [react-native/firestore/useAddDocMutation.ts:16](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useAddDocMutation.ts#L16)

***

### reference

```ts
reference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;
```

Defined in: [react-native/firestore/useAddDocMutation.ts:15](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useAddDocMutation.ts#L15)
