[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<AppModelType\>

```ts
type CompositeFilter<AppModelType> = object;
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:22

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### children

```ts
children: QueryElement<AppModelType & object>[];
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:24

***

### operator

```ts
operator: "OR" | "AND";
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:23
