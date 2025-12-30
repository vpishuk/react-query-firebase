[react-query-firebase](../globals.md) / useAppleAuthProviderCredential

# Function: useAppleAuthProviderCredential()

```ts
function useAppleAuthProviderCredential(): (credential) => AuthCredential;
```

Defined in: [src/web/auth/useAppleAuthProviderCredential.ts:27](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useAppleAuthProviderCredential.ts#L27)

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
 const getCredential = useAppleAuthProviderCredential();
 // ...
 getCredential({token, nonce: ''})
};
```
