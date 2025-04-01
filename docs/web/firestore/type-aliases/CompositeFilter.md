[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / CompositeFilter

# Type Alias: CompositeFilter\<AppModelType\>

```ts
type CompositeFilter<AppModelType> = object;
```

Defined in: [web/firestore/useCompositeFilter.ts:23](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L23)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### children

```ts
children: QueryElement<AppModelType & object>[];
```

Defined in: [web/firestore/useCompositeFilter.ts:25](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L25)

***

### operator

```ts
operator: "OR" | "AND";
```

Defined in: [web/firestore/useCompositeFilter.ts:24](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L24)
