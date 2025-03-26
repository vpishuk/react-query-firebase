[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseUpdateDocMutationOptions

# Type Alias: UseUpdateDocMutationOptions\<AppModelType, TContext\>

```ts
type UseUpdateDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [react-native/firestore/useUpdateDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useUpdateDocMutation.ts#L11)

## Type Parameters

### AppModelType

`AppModelType` *extends* `FirebaseFirestoreTypes.DocumentData` = `FirebaseFirestoreTypes.DocumentData`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, ReactNativeFirebase.NativeFirebaseError, UseUpdateDocMutationValues<AppModelType>, TContext>, "mutationFn" | "mutationKey">;
```

Defined in: [react-native/firestore/useUpdateDocMutation.ts:16](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useUpdateDocMutation.ts#L16)

***

### reference

```ts
reference: FirebaseFirestoreTypes.DocumentReference<AppModelType> | null;
```

Defined in: [react-native/firestore/useUpdateDocMutation.ts:15](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useUpdateDocMutation.ts#L15)
