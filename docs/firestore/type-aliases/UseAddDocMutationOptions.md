[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseAddDocMutationOptions

# Type Alias: UseAddDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseAddDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [src/firestore/useAddDocMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useAddDocMutation.ts#L18)

## Type Parameters

• **AppModelType** *extends* `DocumentData` = `DocumentData`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

• **TContext** = `unknown`

## Type declaration

### converter?

```ts
optional converter: FirestoreDataConverter<AppModelType, DbModelType>;
```

### options?

```ts
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseAddDocMutationValues<AppModelType>, TContext>, "mutationFn" | "mutationKey">;
```

### reference

```ts
reference: CollectionReference<AppModelType, DbModelType>;
```
