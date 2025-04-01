[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseDocReferencesOptions

# Type Alias: UseDocReferencesOptions\<AppModelType\>

```ts
type UseDocReferencesOptions<AppModelType> = object;
```

Defined in: [react-native/firestore/useDocReferences.ts:6](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useDocReferences.ts#L6)

## Type Parameters

### AppModelType

`AppModelType` *extends* `FirebaseFirestoreTypes.DocumentData` = `FirebaseFirestoreTypes.DocumentData`

## Properties

### path

```ts
path: string;
```

Defined in: [react-native/firestore/useDocReferences.ts:12](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useDocReferences.ts#L12)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [react-native/firestore/useDocReferences.ts:13](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useDocReferences.ts#L13)

***

### reference?

```ts
optional reference: 
  | FirebaseFirestoreTypes.CollectionReference<AppModelType>
| FirebaseFirestoreTypes.DocumentReference<AppModelType>;
```

Defined in: [react-native/firestore/useDocReferences.ts:9](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useDocReferences.ts#L9)
