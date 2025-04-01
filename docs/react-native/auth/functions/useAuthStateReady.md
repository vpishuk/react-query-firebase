[react-query-firebase](../../../modules.md) / [react-native/auth](../index.md) / useAuthStateReady

# Function: useAuthStateReady()

```ts
function useAuthStateReady(): boolean
```

Defined in: [react-native/auth/useAuthStateReady.ts:20](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/auth/useAuthStateReady.ts#L20)

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
