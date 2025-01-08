[react-query-firebase](../../modules.md) / [auth](../index.md) / useIdToken

# Function: useIdToken()

```ts
function useIdToken(): object
```

Defined in: [src/auth/useIdToken.ts:12](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/auth/useIdToken.ts#L12)

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
