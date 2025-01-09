[react-query-firebase](../../modules.md) / [auth](../index.md) / useIdToken

# Function: useIdToken()

```ts
function useIdToken(): object
```

Defined in: [src/auth/useIdToken.ts:12](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/auth/useIdToken.ts#L12)

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
