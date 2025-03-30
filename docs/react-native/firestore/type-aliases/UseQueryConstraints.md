[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseQueryConstraints

# Type Alias: UseQueryConstraints\<AppModelType\>

```ts
type UseQueryConstraints<AppModelType> = object;
```

Defined in: react-native/firestore/useQueryConstraints.ts:9

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### constraints

```ts
constraints: NonFilterQueryConstraint<AppModelType>[];
```

Defined in: react-native/firestore/useQueryConstraints.ts:13

A list of constraints such as limit, order, offset.
