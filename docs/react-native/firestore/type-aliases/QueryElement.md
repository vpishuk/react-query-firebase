[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<AppModelType\>

```ts
type QueryElement<AppModelType> = object;
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:8

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### children?

```ts
optional children: QueryElement[];
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:10

***

### field?

```ts
optional field: keyof AppModelType & object;
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:11

***

### op?

```ts
optional op: FirebaseFirestoreTypes.WhereFilterOp;
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:13

***

### operator?

```ts
optional operator: "OR" | "AND";
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:9

***

### value?

```ts
optional value: AppModelType[keyof AppModelType];
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:12
