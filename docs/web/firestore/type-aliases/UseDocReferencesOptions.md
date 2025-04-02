[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseDocReferencesOptions

# Type Alias: UseDocReferencesOptions\<AppModelType\>

```ts
type UseDocReferencesOptions<AppModelType> = object;
```

Defined in: [web/firestore/useDocReferences.ts:9](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useDocReferences.ts#L9)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### references

```ts
references: Omit<GetDocRefOptions<AppModelType>, "db">[];
```

Defined in: [web/firestore/useDocReferences.ts:10](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useDocReferences.ts#L10)
