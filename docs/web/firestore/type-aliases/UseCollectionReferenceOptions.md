[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseCollectionReferenceOptions

# Type Alias: UseCollectionReferenceOptions\<AppModelType\>

```ts
type UseCollectionReferenceOptions<AppModelType> = object;
```

Defined in: [web/firestore/useCollectionReference.ts:10](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useCollectionReference.ts#L10)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### path

```ts
path: string;
```

Defined in: [web/firestore/useCollectionReference.ts:18](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useCollectionReference.ts#L18)

A slash-separated path to a collection.

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [web/firestore/useCollectionReference.ts:22](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useCollectionReference.ts#L22)

Additional path segments that will be applied relative

***

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, AppModelType>
| DocumentReference<AppModelType, AppModelType>;
```

Defined in: [web/firestore/useCollectionReference.ts:14](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useCollectionReference.ts#L14)

CollectionReference or DocumentReference that is used as a root to lookup a sub-collection
