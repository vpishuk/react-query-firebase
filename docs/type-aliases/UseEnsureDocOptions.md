[react-query-firebase](../globals.md) / UseEnsureDocOptions

# Type Alias: UseEnsureDocOptions\<AppModelType\>

```ts
type UseEnsureDocOptions<AppModelType> = object & Omit<GetDocDataOptions<AppModelType>, "db">;
```

Defined in: [src/web/firestore/useEnsureDoc.ts:13](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useEnsureDoc.ts#L13)

## Type Declaration

### defaults

```ts
defaults: AppModelType;
```

Reference to a document that must be written

### options

```ts
options: Omit<UseQueryOptions<AppModelType, Error, AppModelType>, "queryFn"> & Required<Pick<UseQueryOptions<AppModelType, Error, AppModelType>, "queryKey">>;
```

Options for useMutation hook excluding mutationFn.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](AppModel.md) = [`AppModel`](AppModel.md)
