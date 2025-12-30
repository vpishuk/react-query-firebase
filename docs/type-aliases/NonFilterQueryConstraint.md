[react-query-firebase](../globals.md) / NonFilterQueryConstraint

# Type Alias: NonFilterQueryConstraint\<AppModelType\>

```ts
type NonFilterQueryConstraint<AppModelType> = 
  | OrderByConstraint<AppModelType>
  | StartConstraint
  | EndConstraint
  | LimitConstraint;
```

Defined in: [src/types/QueryConstraints.ts:53](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/types/QueryConstraints.ts#L53)

Non filtering query constaints

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)
