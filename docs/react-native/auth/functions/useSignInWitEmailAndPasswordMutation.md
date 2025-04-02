[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useSignInWitEmailAndPasswordMutation

# Function: useSignInWitEmailAndPasswordMutation()

```ts
function useSignInWitEmailAndPasswordMutation<TContext>(options): UseMutationResult<UserCredential, NativeFirebaseError, UseSignInWitEmailAndPasswordMutationVariables, TContext>
```

Defined in: [react-native/auth/useSignInWitEmailAndPasswordMutation.ts:20](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/auth/useSignInWitEmailAndPasswordMutation.ts#L20)

Custom hook to perform a sign-in operation using email and password with Firebase Authentication.
It utilizes the `useMutation` hook to manage the asynchronous operation and its state.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential`, `NativeFirebaseError`, [`UseSignInWitEmailAndPasswordMutationVariables`](../type-aliases/UseSignInWitEmailAndPasswordMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Options to configure the mutation, excluding 'mutationKey' and 'mutationFn'.

## Returns

`UseMutationResult`\<`UserCredential`, `NativeFirebaseError`, [`UseSignInWitEmailAndPasswordMutationVariables`](../type-aliases/UseSignInWitEmailAndPasswordMutationVariables.md), `TContext`\>

A mutation object containing the result of the sign-in process and helper functions.
