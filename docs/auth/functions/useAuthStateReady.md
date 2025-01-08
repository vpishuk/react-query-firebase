[react-query-firebase](../../modules.md) / [auth](../index.md) / useAuthStateReady

# Function: useAuthStateReady()

```ts
function useAuthStateReady(): boolean
```

Defined in: [src/auth/useAuthStateReady.ts:9](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/auth/useAuthStateReady.ts#L9)

A custom hook that determines if the Firebase authentication state is ready.
It uses Firebase authentication to check if the auth state is ready and updates the state accordingly.

## Returns

`boolean`

Indicates whether the authentication state is ready.
