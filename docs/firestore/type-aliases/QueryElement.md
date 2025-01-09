[react-query-firebase](../../modules.md) / [firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<DbModelType\>

```ts
type QueryElement<DbModelType> = Partial<QueryCompositeFilterConstraint> & object;
```

Defined in: [src/firestore/useCompositeFilter.ts:15](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useCompositeFilter.ts#L15)

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
optional op: WhereFilterOp;
```

### value?

```ts
optional value: DbModelType[keyof DbModelType];
```

## Type Parameters

• **DbModelType** *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`
