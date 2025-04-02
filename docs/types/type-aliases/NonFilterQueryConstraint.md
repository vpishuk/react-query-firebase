[react-query-firebase](../../modules.md) / [types](../index.md) / NonFilterQueryConstraint

# Type Alias: NonFilterQueryConstraint\<AppModelType\>

```ts
type NonFilterQueryConstraint<AppModelType> = 
  | OrderByConstraint<AppModelType>
  | StartConstraint
  | EndConstraint
  | LimitConstraint;
```

Defined in: [types/QueryConstraints.ts:54](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/types/QueryConstraints.ts#L54)

Non filtering query constaints

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)
