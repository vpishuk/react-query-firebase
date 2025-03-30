[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / QueryElement

# Type Alias: QueryElement\<DbModelType\>

```ts
type QueryElement<DbModelType> = object;
```

Defined in: [web/firestore/useCompositeFilter.ts:6](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L6)

## Type Parameters

### DbModelType

`DbModelType` *extends* `CompositeFilterDocumentData` = `CompositeFilterDocumentData`

## Properties

### children?

```ts
optional children: QueryElement[];
```

Defined in: [web/firestore/useCompositeFilter.ts:8](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L8)

***

### field?

```ts
optional field: keyof DbModelType & object;
```

Defined in: [web/firestore/useCompositeFilter.ts:9](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L9)

***

### op?

```ts
optional op: WhereFilterOp;
```

Defined in: [web/firestore/useCompositeFilter.ts:11](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L11)

***

### operator?

```ts
optional operator: "OR" | "AND";
```

Defined in: [web/firestore/useCompositeFilter.ts:7](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L7)

***

### value?

```ts
optional value: DbModelType[keyof DbModelType];
```

Defined in: [web/firestore/useCompositeFilter.ts:10](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCompositeFilter.ts#L10)
