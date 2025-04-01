[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseUpdateDocMutationOptions

# Type Alias: UseUpdateDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseUpdateDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [web/firestore/useUpdateDocMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useUpdateDocMutation.ts#L18)

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Properties

### converter?

```ts
optional converter: FirestoreDataConverter<AppModelType, DbModelType>;
```

Defined in: [web/firestore/useUpdateDocMutation.ts:24](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useUpdateDocMutation.ts#L24)

***

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseUpdateDocMutationValues<DbModelType>, TContext>, "mutationFn" | "mutationKey">;
```

Defined in: [web/firestore/useUpdateDocMutation.ts:25](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useUpdateDocMutation.ts#L25)

***

### reference

```ts
reference: DocumentReference<AppModelType, DbModelType> | null;
```

Defined in: [web/firestore/useUpdateDocMutation.ts:23](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useUpdateDocMutation.ts#L23)
