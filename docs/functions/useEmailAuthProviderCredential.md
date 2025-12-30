[react-query-firebase](../globals.md) / useEmailAuthProviderCredential

# Function: useEmailAuthProviderCredential()

```ts
function useEmailAuthProviderCredential(): (credential) => AuthCredential;
```

Defined in: [src/web/auth/useEmailAuthProviderCredential.ts:28](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useEmailAuthProviderCredential.ts#L28)

A custom hook that returns an auth credential for email.

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
 const getCredential = useEmailAuthProviderCredential();
 // ...
 getCredential({email, password})
};
```
