[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<DbModelType\>

```ts
type CompositeFilter<DbModelType> = object;
```

Defined in: [react-native/firestore/useCompositeFilter.ts:14](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useCompositeFilter.ts#L14)

## Type Parameters

### DbModelType

`DbModelType` *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`

## Properties

### children

```ts
children: QueryElement<DbModelType & object>[];
```

Defined in: [react-native/firestore/useCompositeFilter.ts:16](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useCompositeFilter.ts#L16)

***

### operator

```ts
operator: FirebaseFirestoreTypes.QueryFilterType;
```

Defined in: [react-native/firestore/useCompositeFilter.ts:15](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useCompositeFilter.ts#L15)
