[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useSignInWitRedirectMutation

# Function: useSignInWitRedirectMutation()

```ts
function useSignInWitRedirectMutation<TContext>(options): UseMutationResult<void, NativeFirebaseError, UseSignInWitRedirectMutationVariables, TContext>
```

Defined in: [react-native/auth/useSignInWitRedirectMutation.ts:19](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/auth/useSignInWitRedirectMutation.ts#L19)

Custom hook for handling Firebase authentication using sign-in with redirect functionality.
This hook utilizes the `useMutation` mechanism to perform the sign-in operation.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`void`, `NativeFirebaseError`, [`UseSignInWitRedirectMutationVariables`](../type-aliases/UseSignInWitRedirectMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.

## Returns

`UseMutationResult`\<`void`, `NativeFirebaseError`, [`UseSignInWitRedirectMutationVariables`](../type-aliases/UseSignInWitRedirectMutationVariables.md), `TContext`\>

The result object from the useMutation hook, containing the mutation function and its current state.
