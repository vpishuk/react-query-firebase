[react-query-firebase](../globals.md) / useAuthStateReady

# Function: useAuthStateReady()

```ts
function useAuthStateReady(): boolean;
```

Defined in: [src/web/auth/useAuthStateReady.ts:20](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useAuthStateReady.ts#L20)

A custom hook that determines if the Firebase authentication state is ready.
It uses Firebase authentication to check if the auth state is ready and updates the state accordingly.

## Returns

`boolean`

## Example

```jsx
export const MyComponent = () => {
 const isAuthStateReady = useAuthStateReady();
 console.log(isAuthStateReady);
};
```
