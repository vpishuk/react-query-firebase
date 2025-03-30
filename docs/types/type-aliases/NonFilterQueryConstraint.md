[react-query-firebase](../../modules.md) / [types](../index.md) / NonFilterQueryConstraint

# Type Alias: NonFilterQueryConstraint\<AppModelType\>

```ts
type NonFilterQueryConstraint<AppModelType> = 
  | OrderByConstraint<AppModelType>
  | StartConstraint
  | EndConstraint
  | LimitConstraint;
```

Defined in: types/QueryConstraints.ts:54

Non filtering query constaints

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)
