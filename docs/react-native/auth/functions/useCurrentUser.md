[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useCurrentUser

# Function: useCurrentUser()

```ts
function useCurrentUser(): null | User
```

Defined in: [react-native/auth/useCurrentUser.ts:9](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/auth/useCurrentUser.ts#L9)

Hook that provides the current authenticated user from Firebase Auth.
It listens for changes in the authentication state and updates the user accordingly.

## Returns

`null` \| `User`

The current authenticated user object or null if no user is authenticated.
