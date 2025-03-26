[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useSendEmailVerificationMutation

# Function: useSendEmailVerificationMutation()

```ts
function useSendEmailVerificationMutation<TContext>(options): UseMutationResult<void, NativeFirebaseError, UseSendEmailVerificationMutationVariables, TContext>
```

Defined in: [react-native/auth/useSendEmailVerificationMutation.ts:17](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/auth/useSendEmailVerificationMutation.ts#L17)

A custom hook to create a mutation for sending an email verification to a user using Firebase.
This uses the `useMutation` hook from a query library and wraps it with specific configuration options.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`void`, `NativeFirebaseError`, [`UseSendEmailVerificationMutationVariables`](../type-aliases/UseSendEmailVerificationMutationVariables.md), `TContext`\>, `"queryKey"` \| `"queryFn"`\> = `{}`

Configuration options for the mutation, excluding `queryKey` and `queryFn`.

## Returns

`UseMutationResult`\<`void`, `NativeFirebaseError`, [`UseSendEmailVerificationMutationVariables`](../type-aliases/UseSendEmailVerificationMutationVariables.md), `TContext`\>

An object containing mutation state and functions for managing the mutation lifecycle.
