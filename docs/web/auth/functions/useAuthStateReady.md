[react-query-firebase](../../../modules.md) / [web/auth](../index.md) / useAuthStateReady

# Function: useAuthStateReady()

```ts
function useAuthStateReady(): boolean
```

Defined in: [web/auth/useAuthStateReady.ts:20](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/auth/useAuthStateReady.ts#L20)

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
