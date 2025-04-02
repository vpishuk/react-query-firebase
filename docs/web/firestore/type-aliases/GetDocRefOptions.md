[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / GetDocRefOptions

# Type Alias: GetDocRefOptions\<AppModelType\>

```ts
type GetDocRefOptions<AppModelType> = object;
```

Defined in: [web/firestore/utils/getDocRef.ts:7](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/utils/getDocRef.ts#L7)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### db

```ts
db: Firestore;
```

Defined in: [web/firestore/utils/getDocRef.ts:8](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/utils/getDocRef.ts#L8)

***

### path?

```ts
optional path: string;
```

Defined in: [web/firestore/utils/getDocRef.ts:10](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/utils/getDocRef.ts#L10)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [web/firestore/utils/getDocRef.ts:11](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/utils/getDocRef.ts#L11)

***

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, AppModelType>
| DocumentReference<AppModelType, AppModelType>;
```

Defined in: [web/firestore/utils/getDocRef.ts:9](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/utils/getDocRef.ts#L9)
