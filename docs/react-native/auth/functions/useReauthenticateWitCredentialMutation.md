[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useReauthenticateWitCredentialMutation

# Function: useReauthenticateWitCredentialMutation()

```ts
function useReauthenticateWitCredentialMutation<TContext>(options): UseMutationResult<UserCredential, NativeFirebaseError, UseReauthenticateWitCredentialMutationVariables, TContext>
```

Defined in: [react-native/auth/useReauthenticateWitCredentialMutation.ts:19](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/auth/useReauthenticateWitCredentialMutation.ts#L19)

Custom hook to create a mutation for re-authenticating a user with a given credential.
This hook utilizes useMutation from React Query to manage the asynchronous re-authentication
process with Firebase credentials. It omits the default "mutationKey" and "mutationFn" options.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential`, `NativeFirebaseError`, [`UseReauthenticateWitCredentialMutationVariables`](../type-aliases/UseReauthenticateWitCredentialMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional mutation options excluding "mutationKey" and "mutationFn".

## Returns

`UseMutationResult`\<`UserCredential`, `NativeFirebaseError`, [`UseReauthenticateWitCredentialMutationVariables`](../type-aliases/UseReauthenticateWitCredentialMutationVariables.md), `TContext`\>

A useMutation result object managing the loading, error, and result state of the re-authentication mutation.
