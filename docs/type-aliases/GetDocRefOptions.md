[react-query-firebase](../globals.md) / GetDocRefOptions

# Type Alias: GetDocRefOptions\<AppModelType\>

```ts
type GetDocRefOptions<AppModelType> = object;
```

Defined in: [src/web/firestore/utils/getDocRef.ts:7](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/getDocRef.ts#L7)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)

## Properties

### db

```ts
db: Firestore;
```

Defined in: [src/web/firestore/utils/getDocRef.ts:8](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/getDocRef.ts#L8)

***

### path?

```ts
optional path: string;
```

Defined in: [src/web/firestore/utils/getDocRef.ts:10](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/getDocRef.ts#L10)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [src/web/firestore/utils/getDocRef.ts:11](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/getDocRef.ts#L11)

***

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, AppModelType>
| DocumentReference<AppModelType, AppModelType>;
```

Defined in: [src/web/firestore/utils/getDocRef.ts:9](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/getDocRef.ts#L9)
