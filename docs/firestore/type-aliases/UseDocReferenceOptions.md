[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseDocReferenceOptions

# Type Alias: UseDocReferenceOptions\<AppModelType, DbModelType\>

```ts
type UseDocReferenceOptions<AppModelType, DbModelType> = object;
```

Defined in: [src/firestore/useDocReference.ts:6](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useDocReference.ts#L6)

## Type Parameters

• **AppModelType**

• **DbModelType** *extends* `DocumentData` = `DocumentData`

## Type declaration

### path?

```ts
optional path: string;
```

### pathSegments?

```ts
optional pathSegments: string[];
```

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, DbModelType>
| DocumentReference<AppModelType, DbModelType>;
```
