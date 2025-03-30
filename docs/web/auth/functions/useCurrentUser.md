[react-query-firebase](../../../modules.md) / [web/auth](../index.md) / useCurrentUser

# Function: useCurrentUser()

```ts
function useCurrentUser(): null | User
```

Defined in: [web/auth/useCurrentUser.ts:9](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/auth/useCurrentUser.ts#L9)

Hook that provides the current authenticated user from Firebase Auth.
It listens for changes in the authentication state and updates the user accordingly.

## Returns

`null` \| `User`

The current authenticated user object or null if no user is authenticated.
