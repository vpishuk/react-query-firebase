[react-query-firebase](../../modules.md) / [auth](../index.md) / useReauthenticateWitCredentialMutation

# Function: useReauthenticateWitCredentialMutation()

```ts
function useReauthenticateWitCredentialMutation<TContext>(options): UseMutationResult<UserCredential, FirebaseError, UseReauthenticateWitCredentialMutationVariables, TContext>
```

Defined in: [src/auth/useReauthenticateWitCredentialMutation.ts:19](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/auth/useReauthenticateWitCredentialMutation.ts#L19)

Custom hook to create a mutation for re-authenticating a user with a given credential.
This hook utilizes useMutation from React Query to manage the asynchronous re-authentication
process with Firebase credentials. It omits the default "mutationKey" and "mutationFn" options.

## Type Parameters

• **TContext** = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential`, `FirebaseError`, [`UseReauthenticateWitCredentialMutationVariables`](../type-aliases/UseReauthenticateWitCredentialMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional mutation options excluding "mutationKey" and "mutationFn".

## Returns

`UseMutationResult`\<`UserCredential`, `FirebaseError`, [`UseReauthenticateWitCredentialMutationVariables`](../type-aliases/UseReauthenticateWitCredentialMutationVariables.md), `TContext`\>

A useMutation result object managing the loading, error, and result state of the re-authentication mutation.
