[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseSetDocMutationOptions

# Type Alias: UseSetDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseSetDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [src/firestore/useSetDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/firestore/useSetDocMutation.ts#L11)

## Type Parameters

• **AppModelType** = `unknown`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

• **TContext** = `unknown`

## Type declaration

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, UseSetDocMutationValues<AppModelType>, TContext>, "mutationFn" | "mutationKey">;
```

### reference

```ts
reference: DocumentReference<AppModelType, DbModelType> | null;
```
