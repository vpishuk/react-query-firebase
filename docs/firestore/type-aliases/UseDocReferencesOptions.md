[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseDocReferencesOptions

# Type Alias: UseDocReferencesOptions\<AppModelType, DbModelType\>

```ts
type UseDocReferencesOptions<AppModelType, DbModelType> = object;
```

Defined in: [src/firestore/useDocReferences.ts:6](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useDocReferences.ts#L6)

## Type Parameters

• **AppModelType**

• **DbModelType** *extends* `DocumentData` = `DocumentData`

## Type declaration

### path

```ts
path: string;
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
