[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<DbModelType\>

```ts
type CompositeFilter<DbModelType> = object;
```

Defined in: [web/firestore/useCompositeFilter.ts:23](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useCompositeFilter.ts#L23)

## Type Parameters

### DbModelType

`DbModelType` *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`

## Properties

### children

```ts
children: QueryElement<DbModelType & object>[];
```

Defined in: [web/firestore/useCompositeFilter.ts:25](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useCompositeFilter.ts#L25)

***

### operator

```ts
operator: "OR" | "AND";
```

Defined in: [web/firestore/useCompositeFilter.ts:24](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useCompositeFilter.ts#L24)
