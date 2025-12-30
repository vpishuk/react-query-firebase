[react-query-firebase](../globals.md) / UseDocReferencesOptions

# Type Alias: UseDocReferencesOptions\<AppModelType\>

```ts
type UseDocReferencesOptions<AppModelType> = object;
```

Defined in: [src/web/firestore/useDocReferences.ts:9](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useDocReferences.ts#L9)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)

## Properties

### references

```ts
references: Omit<GetDocRefOptions<AppModelType>, "db">[];
```

Defined in: [src/web/firestore/useDocReferences.ts:10](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useDocReferences.ts#L10)
