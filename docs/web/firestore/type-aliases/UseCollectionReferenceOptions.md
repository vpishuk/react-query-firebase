[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseCollectionReferenceOptions

# Type Alias: UseCollectionReferenceOptions\<AppModelType, DbModelType\>

```ts
type UseCollectionReferenceOptions<AppModelType, DbModelType> = object;
```

Defined in: [web/firestore/useCollectionReference.ts:6](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCollectionReference.ts#L6)

## Type Parameters

### AppModelType

`AppModelType`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Properties

### path

```ts
path: string;
```

Defined in: [web/firestore/useCollectionReference.ts:8](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCollectionReference.ts#L8)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [web/firestore/useCollectionReference.ts:9](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCollectionReference.ts#L9)

***

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, DbModelType>
| DocumentReference<AppModelType, DbModelType>;
```

Defined in: [web/firestore/useCollectionReference.ts:7](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCollectionReference.ts#L7)
