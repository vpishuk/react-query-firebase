[react-query-firebase](../../modules.md) / [firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<DbModelType\>

```ts
type QueryElement<DbModelType> = Partial<QueryCompositeFilterConstraint> & object;
```

Defined in: [src/firestore/useCompositeFilter.ts:15](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useCompositeFilter.ts#L15)

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
