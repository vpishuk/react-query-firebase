[react-query-firebase](../../modules.md) / [auth](../index.md) / useUpdateProfileMutation

# Function: useUpdateProfileMutation()

```ts
function useUpdateProfileMutation<TContext>(options): UseMutationResult<void, FirebaseError, UseUpdateProfileMutationVariables, TContext>
```

Defined in: [src/auth/useUpdateProfileMutation.ts:18](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/auth/useUpdateProfileMutation.ts#L18)

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
