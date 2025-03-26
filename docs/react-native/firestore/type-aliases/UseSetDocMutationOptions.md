[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseSetDocMutationOptions

# Type Alias: UseSetDocMutationOptions\<AppModelType, TContext\>

```ts
type UseSetDocMutationOptions<AppModelType, TContext> = object;
```

Defined in: [react-native/firestore/useSetDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useSetDocMutation.ts#L11)

## Type Parameters

### AppModelType

`AppModelType` *extends* `FirebaseFirestoreTypes.DocumentData` = `FirebaseFirestoreTypes.DocumentData`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<void, ReactNativeFirebase.NativeFirebaseError, UseSetDocMutationValues<AppModelType>, TContext>, "mutationFn" | "mutationKey">;
```

Defined in: [react-native/firestore/useSetDocMutation.ts:16](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useSetDocMutation.ts#L16)

***

### reference

```ts
reference: FirebaseFirestoreTypes.DocumentReference<AppModelType> | null;
```

Defined in: [react-native/firestore/useSetDocMutation.ts:15](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useSetDocMutation.ts#L15)
