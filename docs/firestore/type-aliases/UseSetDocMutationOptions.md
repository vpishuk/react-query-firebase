[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseSetDocMutationOptions

# Type Alias: UseSetDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseSetDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [src/firestore/useSetDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useSetDocMutation.ts#L11)

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
