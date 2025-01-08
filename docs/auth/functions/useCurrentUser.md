[react-query-firebase](../../modules.md) / [auth](../index.md) / useCurrentUser

# Function: useCurrentUser()

```ts
function useCurrentUser(): null | User
```

Defined in: [src/auth/useCurrentUser.ts:9](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/auth/useCurrentUser.ts#L9)

Hook that provides the current authenticated user from Firebase Auth.
It listens for changes in the authentication state and updates the user accordingly.

## Returns

`null` \| `User`

The current authenticated user object or null if no user is authenticated.
