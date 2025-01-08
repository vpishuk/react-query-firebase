[react-query-firebase](../../modules.md) / [auth](../index.md) / useIdToken

# Function: useIdToken()

```ts
function useIdToken(): object
```

Defined in: [src/auth/useIdToken.ts:12](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/auth/useIdToken.ts#L12)

Custom hook to manage an ID token for the current user.
This hook provides an `idToken` value and a `refresh` function to manually refresh the token.

## Returns

`object`

An object containing:

### idToken

```ts
idToken: string;
```

### refresh()

```ts
refresh: () => Promise<void>;
```

#### Returns

`Promise`\<`void`\>
