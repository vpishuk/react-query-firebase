[react-query-firebase](../../modules.md) / [auth](../index.md) / useUpdateProfileMutation

# Function: useUpdateProfileMutation()

```ts
function useUpdateProfileMutation<TContext>(options): UseMutationResult<void, FirebaseError, UseUpdateProfileMutationVariables, TContext>
```

Defined in: [src/auth/useUpdateProfileMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/auth/useUpdateProfileMutation.ts#L18)

Custom hook to manage the mutation for updating a user's profile.
Utilizes Firebase for updating the user's display name.

## Type Parameters

• **TContext** = `unknown`

## Parameters

### options

`Omit`\<`UseMutationOptions`\<`FirebaseError`, [`UseUpdateProfileMutationVariables`](../type-aliases/UseUpdateProfileMutationVariables.md), `TContext`\>, `"mutationKey"` \| `"mutationFn"`\> = `{}`

Configuration options for the mutation, excluding mutationKey and mutationFn.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, [`UseUpdateProfileMutationVariables`](../type-aliases/UseUpdateProfileMutationVariables.md), `TContext`\>

The result of the mutation operation including statuses, data, and error information.
