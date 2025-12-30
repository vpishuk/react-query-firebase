[react-query-firebase](../globals.md) / useCurrentUser

# Function: useCurrentUser()

```ts
function useCurrentUser(): User | null;
```

Defined in: [src/web/auth/useCurrentUser.ts:10](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useCurrentUser.ts#L10)

Hook that provides the current authenticated user from Firebase Auth.
It listens for changes in the authentication state and updates the user accordingly.

## Returns

`User` \| `null`

The current authenticated user object or null if no user is authenticated.
