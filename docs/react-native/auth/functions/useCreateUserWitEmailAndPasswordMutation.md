[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useCreateUserWitEmailAndPasswordMutation

# Function: useCreateUserWitEmailAndPasswordMutation()

```ts
function useCreateUserWitEmailAndPasswordMutation<TContext>(options): UseMutationResult<UserCredential, NativeFirebaseError, UseCreateUserWitEmailAndPasswordMutationVariables, TContext>
```

Defined in: [react-native/auth/useCreateUserWitEmailAndPasswordMutation.ts:19](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/auth/useCreateUserWitEmailAndPasswordMutation.ts#L19)

Custom hook to initiate a user creation process using email and password with Firebase authentication.
This hook utilizes the `useMutation` functionality to support creating new user credentials asynchronously.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential`, `NativeFirebaseError`, [`UseCreateUserWitEmailAndPasswordMutationVariables`](../type-aliases/UseCreateUserWitEmailAndPasswordMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional settings to customize the mutation behavior, excluding `mutationKey` and `mutationFn`.

## Returns

`UseMutationResult`\<`UserCredential`, `NativeFirebaseError`, [`UseCreateUserWitEmailAndPasswordMutationVariables`](../type-aliases/UseCreateUserWitEmailAndPasswordMutationVariables.md), `TContext`\>

The result of the mutation which includes status, user credentials, and error information if any.
