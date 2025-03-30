[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseCollectionReferenceOptions

# Type Alias: UseCollectionReferenceOptions\<AppModelType\>

```ts
type UseCollectionReferenceOptions<AppModelType> = object;
```

Defined in: [react-native/firestore/useCollectionReference.ts:6](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useCollectionReference.ts#L6)

## Type Parameters

### AppModelType

`AppModelType` *extends* `FirebaseFirestoreTypes.DocumentData` = `FirebaseFirestoreTypes.DocumentData`

## Properties

### path

```ts
path: string;
```

Defined in: [react-native/firestore/useCollectionReference.ts:12](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useCollectionReference.ts#L12)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [react-native/firestore/useCollectionReference.ts:13](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useCollectionReference.ts#L13)

***

### reference?

```ts
optional reference: 
  | FirebaseFirestoreTypes.CollectionReference<AppModelType>
| FirebaseFirestoreTypes.DocumentReference<AppModelType>;
```

Defined in: [react-native/firestore/useCollectionReference.ts:9](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useCollectionReference.ts#L9)
