[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseQueryConstraints

# Type Alias: UseQueryConstraints\<AppModelType\>

```ts
type UseQueryConstraints<AppModelType> = object;
```

Defined in: [react-native/firestore/useQueryConstraints.ts:9](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useQueryConstraints.ts#L9)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### constraints

```ts
constraints: NonFilterQueryConstraint<AppModelType>[];
```

Defined in: [react-native/firestore/useQueryConstraints.ts:13](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useQueryConstraints.ts#L13)

A list of constraints such as limit, order, offset.
