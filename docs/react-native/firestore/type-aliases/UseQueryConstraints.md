[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseQueryConstraints

# Type Alias: UseQueryConstraints\<AppModelType\>

```ts
type UseQueryConstraints<AppModelType> = object;
```

Defined in: [react-native/firestore/useQueryConstraints.ts:10](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useQueryConstraints.ts#L10)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### constraints

```ts
constraints: NonFilterQueryConstraint<AppModelType>[];
```

Defined in: [react-native/firestore/useQueryConstraints.ts:14](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useQueryConstraints.ts#L14)

A list of constraints such as limit, order, offset.
