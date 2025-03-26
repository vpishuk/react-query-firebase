[react-query-firebase](../../../modules.md) / [web/auth](../index.md) / useSignOutMutation

# Function: useSignOutMutation()

```ts
function useSignOutMutation<TContext>(options): UseMutationResult<void, FirebaseError, void, TContext>
```

Defined in: [web/auth/useSignOutMutation.ts:15](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/auth/useSignOutMutation.ts#L15)

Custom hook for handling the sign-out mutation using Firebase authentication.
It wraps the useMutation hook to provide a sign-out function with Firebase.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`void`, `FirebaseError`, `void`, `TContext`\>, `"queryKey"` \| `"queryFn"`\> = `{}`

Configuration options for the mutation, excluding "queryKey" and "queryFn".

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, `void`, `TContext`\>

A mutation object for handling the sign-out process, including methods for mutating and state tracking.
