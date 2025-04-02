[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseCollectionReferenceOptions

# Type Alias: UseCollectionReferenceOptions\<AppModelType\>

```ts
type UseCollectionReferenceOptions<AppModelType> = object;
```

Defined in: [react-native/firestore/useCollectionReference.ts:10](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useCollectionReference.ts#L10)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### path

```ts
path: string;
```

Defined in: [react-native/firestore/useCollectionReference.ts:20](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useCollectionReference.ts#L20)

A slash-separated path to a collection.

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [react-native/firestore/useCollectionReference.ts:24](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useCollectionReference.ts#L24)

Additional path segments that will be applied relative

***

### reference?

```ts
optional reference: 
  | FirebaseFirestoreTypes.CollectionReference<AppModelType>
| FirebaseFirestoreTypes.DocumentReference<AppModelType>;
```

Defined in: [react-native/firestore/useCollectionReference.ts:14](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useCollectionReference.ts#L14)

CollectionReference or DocumentReference that is used as a root to lookup a sub-collection
