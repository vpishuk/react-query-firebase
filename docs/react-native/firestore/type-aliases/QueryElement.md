[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<DbModelType\>

```ts
type QueryElement<DbModelType> = Partial<FirebaseFirestoreTypes.QueryCompositeFilterConstraint> & object;
```

Defined in: [react-native/firestore/useCompositeFilter.ts:6](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useCompositeFilter.ts#L6)

## Type declaration

### children?

```ts
optional children: QueryElement[];
```

### field?

```ts
optional field: keyof DbModelType & object;
```

### op?

```ts
optional op: FirebaseFirestoreTypes.WhereFilterOp;
```

### value?

```ts
optional value: DbModelType[keyof DbModelType];
```

## Type Parameters

### DbModelType

`DbModelType` *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`
