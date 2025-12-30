[react-query-firebase](../globals.md) / QueryElement

# Type Alias: QueryElement\<AppModelType\>

```ts
type QueryElement<AppModelType> = object;
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:14](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L14)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)

## Properties

### children?

```ts
optional children: QueryElement[];
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:16](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L16)

***

### field?

```ts
optional field: keyof AppModelType & object;
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:17](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L17)

***

### op?

```ts
optional op: WhereFilterOp;
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:19](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L19)

***

### operator?

```ts
optional operator: "OR" | "AND";
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:15](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L15)

***

### value?

```ts
optional value: AppModelType[keyof AppModelType];
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:18](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L18)
