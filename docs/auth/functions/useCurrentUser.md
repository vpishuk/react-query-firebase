[react-query-firebase](../../modules.md) / [auth](../index.md) / useCurrentUser

# Function: useCurrentUser()

```ts
function useCurrentUser(): null | User
```

Defined in: [src/auth/useCurrentUser.ts:9](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/auth/useCurrentUser.ts#L9)

Hook that provides the current authenticated user from Firebase Auth.
It listens for changes in the authentication state and updates the user accordingly.

## Returns

`null` \| `User`

The current authenticated user object or null if no user is authenticated.
