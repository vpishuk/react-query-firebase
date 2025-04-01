[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseQueryConstraints

# Type Alias: UseQueryConstraints\<AppModelType\>

```ts
type UseQueryConstraints<AppModelType> = object;
```

Defined in: [web/firestore/useQueryConstraints.ts:18](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useQueryConstraints.ts#L18)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### constraints

```ts
constraints: NonFilterQueryConstraint<AppModelType>[];
```

Defined in: [web/firestore/useQueryConstraints.ts:22](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useQueryConstraints.ts#L22)

A list of constraints such as limit, order, offset.
