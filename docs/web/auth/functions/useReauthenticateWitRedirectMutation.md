[react-query-firebase](../../../modules.md) / [web/auth](../index.md) / useReauthenticateWitRedirectMutation

# Function: useReauthenticateWitRedirectMutation()

```ts
function useReauthenticateWitRedirectMutation<TContext>(options): UseMutationResult<void, FirebaseError, UseReauthenticateWitRedirectMutationVariables, TContext>
```

Defined in: [web/auth/useReauthenticateWitRedirectMutation.ts:21](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/auth/useReauthenticateWitRedirectMutation.ts#L21)

Custom hook that provides a mutation to reauthenticate a user with a given authentication provider using redirection.
This hook uses the `useMutation` hook from the React Query library to handle async mutation logic.

## Type Parameters

### TContext

`TContext` = `unknown`

The type of any additional context you wish to pass to the mutation.

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`void`, `FirebaseError`, [`UseReauthenticateWitRedirectMutationVariables`](../type-aliases/UseReauthenticateWitRedirectMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional configuration object for the mutation. It provides the ability to pass options to customize the behavior of the mutation.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, [`UseReauthenticateWitRedirectMutationVariables`](../type-aliases/UseReauthenticateWitRedirectMutationVariables.md), `TContext`\>

A mutation result object containing methods and state of the mutation.
