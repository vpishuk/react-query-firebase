[react-query-firebase](../../modules.md) / [firestore](../index.md) / UseSetDocMutationOptions

# Type Alias: UseSetDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseSetDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [src/firestore/useSetDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useSetDocMutation.ts#L11)

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
