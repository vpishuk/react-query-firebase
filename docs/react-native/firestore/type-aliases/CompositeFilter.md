[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<AppModelType\>

```ts
type CompositeFilter<AppModelType> = object;
```

Defined in: [react-native/firestore/useCompositeFilter.ts:17](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L17)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### children

```ts
children: QueryElement<AppModelType & object>[];
```

Defined in: [react-native/firestore/useCompositeFilter.ts:19](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L19)

***

### operator

```ts
operator: "OR" | "AND";
```

Defined in: [react-native/firestore/useCompositeFilter.ts:18](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L18)
