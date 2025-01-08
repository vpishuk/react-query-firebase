[react-query-firebase](../../modules.md) / [auth](../index.md) / useSignInWitRedirectMutation

# Function: useSignInWitRedirectMutation()

```ts
function useSignInWitRedirectMutation<TContext>(options): UseMutationResult<void, FirebaseError, UseSignInWitRedirectMutationVariables, TContext>
```

Defined in: [src/auth/useSignInWitRedirectMutation.ts:19](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/auth/useSignInWitRedirectMutation.ts#L19)

Custom hook for handling Firebase authentication using sign-in with redirect functionality.
This hook utilizes the `useMutation` mechanism to perform the sign-in operation.

## Type Parameters

• **TContext** = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`FirebaseError`, [`UseSignInWitRedirectMutationVariables`](../type-aliases/UseSignInWitRedirectMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional configurations for the mutation, omitting the mutationKey and mutationFn properties.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, [`UseSignInWitRedirectMutationVariables`](../type-aliases/UseSignInWitRedirectMutationVariables.md), `TContext`\>

The result object from the useMutation hook, containing the mutation function and its current state.
