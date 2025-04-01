[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseDocReferenceOptions

# Type Alias: UseDocReferenceOptions\<AppModelType, DbModelType\>

```ts
type UseDocReferenceOptions<AppModelType, DbModelType> = object;
```

Defined in: [web/firestore/useDocReference.ts:6](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDocReference.ts#L6)

## Type Parameters

### AppModelType

`AppModelType`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Properties

### path?

```ts
optional path: string;
```

Defined in: [web/firestore/useDocReference.ts:8](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDocReference.ts#L8)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [web/firestore/useDocReference.ts:9](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDocReference.ts#L9)

***

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, DbModelType>
| DocumentReference<AppModelType, DbModelType>;
```

Defined in: [web/firestore/useDocReference.ts:7](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDocReference.ts#L7)
