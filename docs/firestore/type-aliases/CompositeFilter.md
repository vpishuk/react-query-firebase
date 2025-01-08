[react-query-firebase](../../modules.md) / [firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<DbModelType\>

```ts
type CompositeFilter<DbModelType> = QueryCompositeFilterConstraint & object;
```

Defined in: [src/firestore/useCompositeFilter.ts:23](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useCompositeFilter.ts#L23)

## Type declaration

### children

```ts
children: QueryElement<DbModelType & object>[];
```

## Type Parameters

• **DbModelType** *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`
