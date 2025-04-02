[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<AppModelType\>

```ts
type QueryElement<AppModelType> = object;
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:14

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### children?

```ts
optional children: QueryElement[];
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:16

***

### field?

```ts
optional field: keyof AppModelType & object;
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:17

***

### op?

```ts
optional op: WhereFilterOp;
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:19

***

### operator?

```ts
optional operator: "OR" | "AND";
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:15

***

### value?

```ts
optional value: AppModelType[keyof AppModelType];
```

Defined in: web/firestore/utils/buildCompositeFilter.ts:18
