[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / GetDocRefOptions

# Type Alias: GetDocRefOptions\<AppModelType\>

```ts
type GetDocRefOptions<AppModelType> = object;
```

Defined in: [react-native/firestore/utils/getDocRef.ts:7](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/utils/getDocRef.ts#L7)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### db

```ts
db: FirebaseFirestoreTypes.Module;
```

Defined in: [react-native/firestore/utils/getDocRef.ts:8](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/utils/getDocRef.ts#L8)

***

### path?

```ts
optional path: string;
```

Defined in: [react-native/firestore/utils/getDocRef.ts:12](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/utils/getDocRef.ts#L12)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [react-native/firestore/utils/getDocRef.ts:13](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/utils/getDocRef.ts#L13)

***

### reference?

```ts
optional reference: 
  | FirebaseFirestoreTypes.CollectionReference<AppModelType>
| FirebaseFirestoreTypes.DocumentReference<AppModelType>;
```

Defined in: [react-native/firestore/utils/getDocRef.ts:9](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/utils/getDocRef.ts#L9)
