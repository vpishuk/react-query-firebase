[react-query-firebase](../../modules.md) / [firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<DbModelType\>

```ts
type CompositeFilter<DbModelType> = QueryCompositeFilterConstraint & object;
```

Defined in: [src/firestore/useCompositeFilter.ts:23](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useCompositeFilter.ts#L23)

## Type declaration

### children

```ts
children: QueryElement<DbModelType & object>[];
```

## Type Parameters

• **DbModelType** *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`
