[react-query-firebase](../../modules.md) / [auth](../index.md) / useSignInWitEmailAndPasswordMutation

# Function: useSignInWitEmailAndPasswordMutation()

```ts
function useSignInWitEmailAndPasswordMutation<TContext>(options): UseMutationResult<UserCredential, FirebaseError, UseSignInWitEmailAndPasswordMutationVariables, TContext>
```

Defined in: [src/auth/useSignInWitEmailAndPasswordMutation.ts:20](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/auth/useSignInWitEmailAndPasswordMutation.ts#L20)

Custom hook to perform a sign-in operation using email and password with Firebase Authentication.
It utilizes the `useMutation` hook to manage the asynchronous operation and its state.

## Type Parameters

• **TContext** = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential`, `FirebaseError`, [`UseSignInWitEmailAndPasswordMutationVariables`](../type-aliases/UseSignInWitEmailAndPasswordMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Options to configure the mutation, excluding 'mutationKey' and 'mutationFn'.

## Returns

`UseMutationResult`\<`UserCredential`, `FirebaseError`, [`UseSignInWitEmailAndPasswordMutationVariables`](../type-aliases/UseSignInWitEmailAndPasswordMutationVariables.md), `TContext`\>

A mutation object containing the result of the sign-in process and helper functions.
