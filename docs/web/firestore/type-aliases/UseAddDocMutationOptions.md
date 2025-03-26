[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseAddDocMutationOptions

# Type Alias: UseAddDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseAddDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [web/firestore/useAddDocMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useAddDocMutation.ts#L18)

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

Defined in: [web/firestore/useAddDocMutation.ts:24](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useAddDocMutation.ts#L24)

***

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseAddDocMutationValues<AppModelType>, TContext>, "mutationFn" | "mutationKey">;
```

Defined in: [web/firestore/useAddDocMutation.ts:25](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useAddDocMutation.ts#L25)

***

### reference

```ts
reference: CollectionReference<AppModelType, DbModelType>;
```

Defined in: [web/firestore/useAddDocMutation.ts:23](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useAddDocMutation.ts#L23)
