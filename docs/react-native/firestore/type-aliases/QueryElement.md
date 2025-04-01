[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<AppModelType\>

```ts
type QueryElement<AppModelType> = object;
```

Defined in: [react-native/firestore/useCompositeFilter.ts:9](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L9)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### children?

```ts
optional children: QueryElement[];
```

Defined in: [react-native/firestore/useCompositeFilter.ts:11](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L11)

***

### field?

```ts
optional field: keyof AppModelType & object;
```

Defined in: [react-native/firestore/useCompositeFilter.ts:12](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L12)

***

### op?

```ts
optional op: FirebaseFirestoreTypes.WhereFilterOp;
```

Defined in: [react-native/firestore/useCompositeFilter.ts:14](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L14)

***

### operator?

```ts
optional operator: "OR" | "AND";
```

Defined in: [react-native/firestore/useCompositeFilter.ts:10](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L10)

***

### value?

```ts
optional value: AppModelType[keyof AppModelType];
```

Defined in: [react-native/firestore/useCompositeFilter.ts:13](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L13)
