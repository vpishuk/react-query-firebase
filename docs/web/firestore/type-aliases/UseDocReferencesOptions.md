[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseDocReferencesOptions

# Type Alias: UseDocReferencesOptions\<AppModelType, DbModelType\>

```ts
type UseDocReferencesOptions<AppModelType, DbModelType> = object;
```

Defined in: [web/firestore/useDocReferences.ts:6](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDocReferences.ts#L6)

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

Defined in: [web/firestore/useDocReferences.ts:8](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDocReferences.ts#L8)

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [web/firestore/useDocReferences.ts:9](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDocReferences.ts#L9)

***

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, DbModelType>
| DocumentReference<AppModelType, DbModelType>;
```

Defined in: [web/firestore/useDocReferences.ts:7](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDocReferences.ts#L7)
