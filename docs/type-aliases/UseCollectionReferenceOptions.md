[react-query-firebase](../globals.md) / UseCollectionReferenceOptions

# Type Alias: UseCollectionReferenceOptions\<AppModelType\>

```ts
type UseCollectionReferenceOptions<AppModelType> = object;
```

Defined in: [src/web/firestore/useCollectionReference.ts:10](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useCollectionReference.ts#L10)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)

## Properties

### path

```ts
path: string;
```

Defined in: [src/web/firestore/useCollectionReference.ts:18](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useCollectionReference.ts#L18)

A slash-separated path to a collection.

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [src/web/firestore/useCollectionReference.ts:22](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useCollectionReference.ts#L22)

Additional path segments that will be applied relative

***

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, AppModelType>
| DocumentReference<AppModelType, AppModelType>;
```

Defined in: [src/web/firestore/useCollectionReference.ts:14](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useCollectionReference.ts#L14)

CollectionReference or DocumentReference that is used as a root to lookup a sub-collection
