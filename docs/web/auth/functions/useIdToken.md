[react-query-firebase](../../../modules.md) / [web/auth](../index.md) / useIdToken

# Function: useIdToken()

```ts
function useIdToken(): object
```

Defined in: [web/auth/useIdToken.ts:36](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/auth/useIdToken.ts#L36)

A hook to manage the ID token.
It monitors changes to the ID token and provides the token itself along with a refresh method to update the token when needed.

## Returns

`object`

### idToken

```ts
idToken: string;
```

### refresh()

```ts
refresh: () => Promise<undefined | string>;
```

#### Returns

`Promise`\<`undefined` \| `string`\>

## Example

```jsx
export const MyComponent = () => {
 const result = useIdToken();
 useEffect(() => {
     const timeout = setTimeout(() => {
         result.refresh();
     }, 5000);
     return () => clearTimeout();
 }, [])
 console.log(resilt.idToken);
};
```
