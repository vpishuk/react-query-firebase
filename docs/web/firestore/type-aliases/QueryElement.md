[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<DbModelType\>

```ts
type QueryElement<DbModelType> = Partial<QueryCompositeFilterConstraint> & object;
```

Defined in: [web/firestore/useCompositeFilter.ts:15](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useCompositeFilter.ts#L15)

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

### DbModelType

`DbModelType` *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`
