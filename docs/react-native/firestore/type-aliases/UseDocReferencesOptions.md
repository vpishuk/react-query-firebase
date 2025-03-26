[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseDocReferencesOptions

# Type Alias: UseDocReferencesOptions\<AppModelType\>

```ts
type UseDocReferencesOptions<AppModelType> = object;
```

Defined in: [react-native/firestore/useDocReferences.ts:6](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useDocReferences.ts#L6)

## Type Parameters

### AppModelType

`AppModelType` *extends* `FirebaseFirestoreTypes.DocumentData` = `FirebaseFirestoreTypes.DocumentData`

## Properties

### path

```ts
path: string;
```

Defined in: [react-native/firestore/useDocReferences.ts:12](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useDocReferences.ts#L12)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [react-native/firestore/useDocReferences.ts:13](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useDocReferences.ts#L13)

***

### reference?

```ts
optional reference: 
  | FirebaseFirestoreTypes.CollectionReference<AppModelType>
| FirebaseFirestoreTypes.DocumentReference<AppModelType>;
```

Defined in: [react-native/firestore/useDocReferences.ts:9](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useDocReferences.ts#L9)
