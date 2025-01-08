[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseDeleteDocMutationOptions

# Type Alias: UseDeleteDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseDeleteDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [src/firestore/useDeleteDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useDeleteDocMutation.ts#L11)

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
