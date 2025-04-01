[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<AppModelType\>

```ts
type QueryElement<AppModelType> = object;
```

Defined in: [web/firestore/useCompositeFilter.ts:15](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L15)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### children?

```ts
optional children: QueryElement[];
```

Defined in: [web/firestore/useCompositeFilter.ts:17](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L17)

***

### field?

```ts
optional field: keyof AppModelType & object;
```

Defined in: [web/firestore/useCompositeFilter.ts:18](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L18)

***

### op?

```ts
optional op: WhereFilterOp;
```

Defined in: [web/firestore/useCompositeFilter.ts:20](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L20)

***

### operator?

```ts
optional operator: "OR" | "AND";
```

Defined in: [web/firestore/useCompositeFilter.ts:16](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L16)

***

### value?

```ts
optional value: AppModelType[keyof AppModelType];
```

Defined in: [web/firestore/useCompositeFilter.ts:19](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useCompositeFilter.ts#L19)
