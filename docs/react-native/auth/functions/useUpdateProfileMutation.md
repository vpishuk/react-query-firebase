[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useUpdateProfileMutation

# Function: useUpdateProfileMutation()

```ts
function useUpdateProfileMutation<TContext>(options): UseMutationResult<void, NativeFirebaseError, UseUpdateProfileMutationVariables, TContext>
```

Defined in: [react-native/auth/useUpdateProfileMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/auth/useUpdateProfileMutation.ts#L18)

Custom hook to manage the mutation for updating a user's profile.
Utilizes Firebase for updating the user's display name.

## Type Parameters

### TContext

`TContext` = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`void`, `NativeFirebaseError`, [`UseUpdateProfileMutationVariables`](../type-aliases/UseUpdateProfileMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Configuration options for the mutation, excluding mutationKey and mutationFn.

## Returns

`UseMutationResult`\<`void`, `NativeFirebaseError`, [`UseUpdateProfileMutationVariables`](../type-aliases/UseUpdateProfileMutationVariables.md), `TContext`\>

The result of the mutation operation including statuses, data, and error information.
