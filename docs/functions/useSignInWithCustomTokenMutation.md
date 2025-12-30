[react-query-firebase](../globals.md) / useSignInWithCustomTokenMutation

# Function: useSignInWithCustomTokenMutation()

```ts
function useSignInWithCustomTokenMutation(options): UseMutationResult<UserCredential, FirebaseError, {
  customToken: string;
}, unknown>;
```

Defined in: [src/web/auth/useSignInWithCustomToken.ts:41](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useSignInWithCustomToken.ts#L41)

Executes a mutation and returns users credentials

## Parameters

### options

Configuration options for the mutation.

#### options?

`Omit`\<`UseMutationOptions`\<`UserCredential`, `FirebaseError`, \{
  `customToken`: `string`;
\}, `unknown`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

## Returns

`UseMutationResult`\<`UserCredential`, `FirebaseError`, \{
  `customToken`: `string`;
\}, `unknown`\>

A mutation result

## Example

```jsx
export const MyComponent = () => {
 const {mutate} = useSignInWithCustomTokenMutation({
     options: {
     },
 });

 // ....
 mutate();
 // ....
};
```
