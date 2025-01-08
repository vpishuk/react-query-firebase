[react-query-firebase](../../modules.md) / [firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<DbModelType\>

```ts
type QueryElement<DbModelType> = Partial<QueryCompositeFilterConstraint> & object;
```

Defined in: [src/firestore/useCompositeFilter.ts:15](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useCompositeFilter.ts#L15)

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
