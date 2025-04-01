[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseDeleteDocMutationOptions

# Type Alias: UseDeleteDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseDeleteDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [web/firestore/useDeleteDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDeleteDocMutation.ts#L11)

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, void, TContext>, "mutationFn" | "mutationKey">;
```

Defined in: [web/firestore/useDeleteDocMutation.ts:17](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDeleteDocMutation.ts#L17)

***

### reference

```ts
reference: DocumentReference<AppModelType, DbModelType> | null;
```

Defined in: [web/firestore/useDeleteDocMutation.ts:16](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useDeleteDocMutation.ts#L16)
