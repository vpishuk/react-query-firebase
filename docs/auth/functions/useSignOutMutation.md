[react-query-firebase](../../modules.md) / [auth](../index.md) / useSignOutMutation

# Function: useSignOutMutation()

```ts
function useSignOutMutation<TContext>(options): UseMutationResult<void, FirebaseError, void, TContext>
```

Defined in: [src/auth/useSignOutMutation.ts:15](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/auth/useSignOutMutation.ts#L15)

Custom hook for handling the sign-out mutation using Firebase authentication.
It wraps the useMutation hook to provide a sign-out function with Firebase.

## Type Parameters

• **TContext** = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`FirebaseError`, `TContext`\>, `"queryKey"` \| `"queryFn"`\> = `{}`

Configuration options for the mutation, excluding "queryKey" and "queryFn".

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, `void`, `TContext`\>

A mutation object for handling the sign-out process, including methods for mutating and state tracking.
