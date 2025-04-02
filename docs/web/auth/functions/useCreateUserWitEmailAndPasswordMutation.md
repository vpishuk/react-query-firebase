[react-query-firebase](../../../modules.md) / [web/auth](../index.md) / useCreateUserWitEmailAndPasswordMutation

# Function: useCreateUserWitEmailAndPasswordMutation()

```ts
function useCreateUserWitEmailAndPasswordMutation<TContext>(options): UseMutationResult<UserCredential, FirebaseError, UseCreateUserWitEmailAndPasswordMutationVariables, TContext>
```

Defined in: [web/auth/useCreateUserWitEmailAndPasswordMutation.ts:19](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/auth/useCreateUserWitEmailAndPasswordMutation.ts#L19)

Custom hook to initiate a user creation process using email and password with Firebase authentication.
This hook utilizes the `useMutation` functionality to support creating new user credentials asynchronously.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential`, `FirebaseError`, [`UseCreateUserWitEmailAndPasswordMutationVariables`](../type-aliases/UseCreateUserWitEmailAndPasswordMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional settings to customize the mutation behavior, excluding `mutationKey` and `mutationFn`.

## Returns

`UseMutationResult`\<`UserCredential`, `FirebaseError`, [`UseCreateUserWitEmailAndPasswordMutationVariables`](../type-aliases/UseCreateUserWitEmailAndPasswordMutationVariables.md), `TContext`\>

The result of the mutation which includes status, user credentials, and error information if any.
