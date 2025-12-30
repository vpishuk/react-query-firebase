[react-query-firebase](../globals.md) / useGetRedirectResultMutation

# Function: useGetRedirectResultMutation()

```ts
function useGetRedirectResultMutation<TContext>(options): UseMutationResult<UserCredential | null, FirebaseError, void, TContext>;
```

Defined in: [src/web/auth/useGetRedirectResultMutation.ts:14](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useGetRedirectResultMutation.ts#L14)

Custom hook to retrieve redirect result after sign in with redirect.
This hook utilizes the `useMutation` functionality to support creating new user credentials asynchronously.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`UserCredential` \| `null`, `FirebaseError`, `void`, `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Optional settings to customize the mutation behavior, excluding `mutationKey` and `mutationFn`.

## Returns

`UseMutationResult`\<`UserCredential` \| `null`, `FirebaseError`, `void`, `TContext`\>

The result of the mutation which includes status, user credentials, and error information if any.
