[react-query-firebase](../../modules.md) / [firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<DbModelType\>

```ts
type CompositeFilter<DbModelType> = QueryCompositeFilterConstraint & object;
```

Defined in: [src/firestore/useCompositeFilter.ts:23](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useCompositeFilter.ts#L23)

## Type declaration

### children

```ts
children: QueryElement<DbModelType & object>[];
```

## Type Parameters

• **DbModelType** *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`
