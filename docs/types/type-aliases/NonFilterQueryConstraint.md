[react-query-firebase](../../modules.md) / [types](../index.md) / NonFilterQueryConstraint

# Type Alias: NonFilterQueryConstraint\<AppModelType\>

```ts
type NonFilterQueryConstraint<AppModelType> = 
  | OrderByConstraint<AppModelType>
  | StartConstraint
  | EndConstraint
  | LimitConstraint;
```

Defined in: [types/QueryConstraints.ts:54](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/types/QueryConstraints.ts#L54)

Non filtering query constaints

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)
