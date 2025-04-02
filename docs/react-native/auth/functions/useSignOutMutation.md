[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useSignOutMutation

# Function: useSignOutMutation()

```ts
function useSignOutMutation<TContext>(options): UseMutationResult<void, NativeFirebaseError, void, TContext>
```

Defined in: [react-native/auth/useSignOutMutation.ts:15](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/auth/useSignOutMutation.ts#L15)

Custom hook for handling the sign-out mutation using Firebase authentication.
It wraps the useMutation hook to provide a sign-out function with Firebase.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`void`, `NativeFirebaseError`, `void`, `TContext`\>, `"queryKey"` \| `"queryFn"`\> = `{}`

Configuration options for the mutation, excluding "queryKey" and "queryFn".

## Returns

`UseMutationResult`\<`void`, `NativeFirebaseError`, `void`, `TContext`\>

A mutation object for handling the sign-out process, including methods for mutating and state tracking.
