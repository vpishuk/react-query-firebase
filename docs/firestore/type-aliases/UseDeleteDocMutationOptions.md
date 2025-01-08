[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseDeleteDocMutationOptions

# Type Alias: UseDeleteDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseDeleteDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [src/firestore/useDeleteDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useDeleteDocMutation.ts#L11)

## Type Parameters

• **AppModelType** *extends* `DocumentData` = `DocumentData`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

• **TContext** = `unknown`

## Type declaration

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, void, TContext>, "mutationFn" | "mutationKey">;
```

### reference

```ts
reference: DocumentReference<AppModelType, DbModelType> | null;
```
