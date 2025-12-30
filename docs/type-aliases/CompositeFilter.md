[react-query-firebase](../globals.md) / CompositeFilter

# Type Alias: CompositeFilter\<AppModelType\>

```ts
type CompositeFilter<AppModelType> = object;
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:22](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L22)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)

## Properties

### children

```ts
children: QueryElement<AppModelType & object>[];
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:24](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L24)

***

### operator

```ts
operator: "OR" | "AND";
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:23](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L23)
