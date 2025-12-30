[react-query-firebase](../globals.md) / useLinkWithCredentialMutation

# Function: useLinkWithCredentialMutation()

```ts
function useLinkWithCredentialMutation<TContext>(options): UseMutationResult<UserCredential, FirebaseError, UseLinkWitCredentialMutationVariables, TContext>;
```

Defined in: [src/web/auth/useLinkWithCredentialMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useLinkWithCredentialMutation.ts#L18)

Custom hook for handling linking of Firebase account to auth provider using credential
This hook utilizes the `useMutation` mechanism to perform the sign-in operation.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential`, `FirebaseError`, [`UseLinkWitCredentialMutationVariables`](../type-aliases/UseLinkWitCredentialMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.

## Returns

`UseMutationResult`\<`UserCredential`, `FirebaseError`, [`UseLinkWitCredentialMutationVariables`](../type-aliases/UseLinkWitCredentialMutationVariables.md), `TContext`\>

The result object from the useMutation hook, containing the mutation function and its current state.
