[react-query-firebase](../../modules.md) / [types](../index.md) / OrderByConstraint

# Type Alias: OrderByConstraint\<AppModelType\>

```ts
type OrderByConstraint<AppModelType> = object;
```

Defined in: types/QueryConstraints.ts:7

Order by constraint

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)

## Properties

### directionStr

```ts
directionStr: "asc" | "desc";
```

Defined in: types/QueryConstraints.ts:19

Direction of ordering: asc or desc

***

### fieldPath

```ts
fieldPath: keyof AppModelType;
```

Defined in: types/QueryConstraints.ts:15

Field path to use for ordering

***

### type

```ts
type: "orderBy";
```

Defined in: types/QueryConstraints.ts:11

Type of a constraint
