[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseDocReferencesOptions

# Type Alias: UseDocReferencesOptions\<AppModelType, DbModelType\>

```ts
type UseDocReferencesOptions<AppModelType, DbModelType> = object;
```

Defined in: [src/firestore/useDocReferences.ts:6](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useDocReferences.ts#L6)

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
