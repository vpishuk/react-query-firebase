[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<DbModelType\>

```ts
type CompositeFilter<DbModelType> = object;
```

Defined in: [web/firestore/useCompositeFilter.ts:14](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L14)

## Type Parameters

### DbModelType

`DbModelType` *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`

## Properties

### children

```ts
children: QueryElement<DbModelType & object>[];
```

Defined in: [web/firestore/useCompositeFilter.ts:16](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L16)

***

### operator

```ts
operator: "OR" | "AND";
```

Defined in: [web/firestore/useCompositeFilter.ts:15](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L15)
