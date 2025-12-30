[react-query-firebase](../globals.md) / useIdToken

# Function: useIdToken()

```ts
function useIdToken(): object;
```

Defined in: [src/web/auth/useIdToken.ts:36](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useIdToken.ts#L36)

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
refresh: () => Promise<string | undefined>;
```

#### Returns

`Promise`\<`string` \| `undefined`\>

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
