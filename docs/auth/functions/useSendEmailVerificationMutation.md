[react-query-firebase](../../modules.md) / [auth](../index.md) / useSendEmailVerificationMutation

# Function: useSendEmailVerificationMutation()

```ts
function useSendEmailVerificationMutation<TContext>(options): UseMutationResult<void, FirebaseError, UseSendEmailVerificationMutationVariables, TContext>
```

Defined in: [src/auth/useSendEmailVerificationMutation.ts:17](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/auth/useSendEmailVerificationMutation.ts#L17)

A custom hook to create a mutation for sending an email verification to a user using Firebase.
This uses the `useMutation` hook from a query library and wraps it with specific configuration options.

## Type Parameters

• **TContext** = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`FirebaseError`, [`UseSendEmailVerificationMutationVariables`](../type-aliases/UseSendEmailVerificationMutationVariables.md), `TContext`\>, `"queryKey"` \| `"queryFn"`\> = `{}`

Configuration options for the mutation, excluding `queryKey` and `queryFn`.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, [`UseSendEmailVerificationMutationVariables`](../type-aliases/UseSendEmailVerificationMutationVariables.md), `TContext`\>

An object containing mutation state and functions for managing the mutation lifecycle.
