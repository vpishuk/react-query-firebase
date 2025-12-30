[react-query-firebase](../globals.md) / useSignInWithCredentialMutation

# Function: useSignInWithCredentialMutation()

```ts
function useSignInWithCredentialMutation<TContext>(options): UseMutationResult<UserCredential, FirebaseError, UseSignInWithCredentialMutationVariables, TContext>;
```

Defined in: [src/web/auth/useSignInWithCredentialMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useSignInWithCredentialMutation.ts#L18)

Custom hook for handling sign in using credential
This hook utilizes the `useMutation` mechanism to perform the sign-in operation.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential`, `FirebaseError`, [`UseSignInWithCredentialMutationVariables`](../type-aliases/UseSignInWithCredentialMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.

## Returns

`UseMutationResult`\<`UserCredential`, `FirebaseError`, [`UseSignInWithCredentialMutationVariables`](../type-aliases/UseSignInWithCredentialMutationVariables.md), `TContext`\>

The result object from the useMutation hook, containing the mutation function and its current state.
