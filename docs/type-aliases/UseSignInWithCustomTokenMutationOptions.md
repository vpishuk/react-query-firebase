[react-query-firebase](../globals.md) / UseSignInWithCustomTokenMutationOptions

# Type Alias: UseSignInWithCustomTokenMutationOptions

```ts
type UseSignInWithCustomTokenMutationOptions = object;
```

Defined in: [src/web/auth/useSignInWithCustomToken.ts:11](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useSignInWithCustomToken.ts#L11)

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<UserCredential, FirebaseError, {
  customToken: string;
}>, "mutationFn">;
```

Defined in: [src/web/auth/useSignInWithCustomToken.ts:15](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useSignInWithCustomToken.ts#L15)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
