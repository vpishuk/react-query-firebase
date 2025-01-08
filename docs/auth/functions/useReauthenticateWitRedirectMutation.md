[react-query-firebase](../../modules.md) / [auth](../index.md) / useReauthenticateWitRedirectMutation

# Function: useReauthenticateWitRedirectMutation()

```ts
function useReauthenticateWitRedirectMutation<TContext>(options): UseMutationResult<void, FirebaseError, UseReauthenticateWitRedirectMutationVariables, TContext>
```

Defined in: [src/auth/useReauthenticateWitRedirectMutation.ts:21](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/auth/useReauthenticateWitRedirectMutation.ts#L21)

Custom hook that provides a mutation to reauthenticate a user with a given authentication provider using redirection.
This hook uses the `useMutation` hook from the React Query library to handle async mutation logic.

## Type Parameters

• **TContext** = `unknown`

The type of any additional context you wish to pass to the mutation.

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`FirebaseError`, [`UseReauthenticateWitRedirectMutationVariables`](../type-aliases/UseReauthenticateWitRedirectMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional configuration object for the mutation. It provides the ability to pass options to customize the behavior of the mutation.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, [`UseReauthenticateWitRedirectMutationVariables`](../type-aliases/UseReauthenticateWitRedirectMutationVariables.md), `TContext`\>

A mutation result object containing methods and state of the mutation.
