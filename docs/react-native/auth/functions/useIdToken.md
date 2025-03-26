[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useIdToken

# Function: useIdToken()

```ts
function useIdToken(): object
```

Defined in: [react-native/auth/useIdToken.ts:36](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/auth/useIdToken.ts#L36)

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
