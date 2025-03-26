[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseSetDocMutationOptions

# Type Alias: UseSetDocMutationOptions\<AppModelType, DbModelType, TContext\>

```ts
type UseSetDocMutationOptions<AppModelType, DbModelType, TContext> = object;
```

Defined in: [web/firestore/useSetDocMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useSetDocMutation.ts#L11)

## Type Parameters

### AppModelType

`AppModelType` = `unknown`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<void, FirebaseError, UseSetDocMutationValues<AppModelType>, TContext>, "mutationFn" | "mutationKey">;
```

Defined in: [web/firestore/useSetDocMutation.ts:17](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useSetDocMutation.ts#L17)

***

### reference

```ts
reference: DocumentReference<AppModelType, DbModelType> | null;
```

Defined in: [web/firestore/useSetDocMutation.ts:16](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useSetDocMutation.ts#L16)
