[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseQueryConstraints

# Type Alias: UseQueryConstraints\<AppModelType\>

```ts
type UseQueryConstraints<AppModelType> = object;
```

Defined in: web/firestore/useQueryConstraints.ts:18

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### constraints

```ts
constraints: NonFilterQueryConstraint<AppModelType>[];
```

Defined in: web/firestore/useQueryConstraints.ts:22

A list of constraints such as limit, order, offset.
