[react-query-firebase](../globals.md) / useFacebookAuthProviderCredential

# Function: useFacebookAuthProviderCredential()

```ts
function useFacebookAuthProviderCredential(): (credential) => AuthCredential;
```

Defined in: [src/web/auth/useFacebookAuthProviderCredential.ts:27](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useFacebookAuthProviderCredential.ts#L27)

A custom hook that returns an auth credential for facebook.

## Returns

```ts
(credential): AuthCredential;
```

### Parameters

#### credential

`Credential`

### Returns

`AuthCredential`

## Example

```jsx
export const MyComponent = () => {
 const getCredential = useFacebookAuthProviderCredential();
 // ...
 getCredential({token, nonce: ''})
};
```
