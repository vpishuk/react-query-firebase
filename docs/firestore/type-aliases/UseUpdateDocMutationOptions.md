[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseUpdateDocMutationOptions

# Type Alias: UseUpdateDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseUpdateDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [src/firestore/useUpdateDocMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useUpdateDocMutation.ts#L18)

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
optional options: Omit<UseMutationOptions<AppModelType, FirebaseError, UseUpdateDocMutationValues<DbModelType>, TContext>, "mutationFn" | "mutationKey">;
```

### reference

```ts
reference: DocumentReference<AppModelType, DbModelType> | null;
```
