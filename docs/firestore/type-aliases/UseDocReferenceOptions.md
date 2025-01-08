[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseDocReferenceOptions

# Type Alias: UseDocReferenceOptions\<AppModelType, DbModelType\>

```ts
type UseDocReferenceOptions<AppModelType, DbModelType> = object;
```

Defined in: [src/firestore/useDocReference.ts:6](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useDocReference.ts#L6)

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
