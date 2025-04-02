[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<AppModelType\>

```ts
type CompositeFilter<AppModelType> = object;
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:16

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### children

```ts
children: QueryElement<AppModelType & object>[];
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:18

***

### operator

```ts
operator: "OR" | "AND";
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:17
