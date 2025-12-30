[react-query-firebase](../globals.md) / UseSignInAnonymouslyMutationOptions

# Type Alias: UseSignInAnonymouslyMutationOptions

```ts
type UseSignInAnonymouslyMutationOptions = object;
```

Defined in: [src/web/auth/useSignInAnonymouslyMutation.ts:11](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useSignInAnonymouslyMutation.ts#L11)

## Properties

### options?

```ts
optional options: Omit<UseMutationOptions<UserCredential, ReactNativeFirebase.NativeFirebaseError, void>, "mutationFn">;
```

Defined in: [src/web/auth/useSignInAnonymouslyMutation.ts:15](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useSignInAnonymouslyMutation.ts#L15)

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
