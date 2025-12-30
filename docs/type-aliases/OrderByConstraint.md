[react-query-firebase](../globals.md) / OrderByConstraint

# Type Alias: OrderByConstraint\<AppModelType\>

```ts
type OrderByConstraint<AppModelType> = object;
```

Defined in: [src/types/QueryConstraints.ts:7](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/types/QueryConstraints.ts#L7)

Order by constraint

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)

## Properties

### directionStr

```ts
directionStr: "asc" | "desc";
```

Defined in: [src/types/QueryConstraints.ts:19](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/types/QueryConstraints.ts#L19)

Direction of ordering: asc or desc

***

### fieldPath

```ts
fieldPath: keyof AppModelType;
```

Defined in: [src/types/QueryConstraints.ts:15](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/types/QueryConstraints.ts#L15)

Field path to use for ordering

***

### type

```ts
type: "orderBy";
```

Defined in: [src/types/QueryConstraints.ts:11](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/types/QueryConstraints.ts#L11)

Type of a constraint
