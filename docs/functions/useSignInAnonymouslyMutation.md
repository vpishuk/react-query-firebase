[react-query-firebase](../globals.md) / useSignInAnonymouslyMutation

# Function: useSignInAnonymouslyMutation()

```ts
function useSignInAnonymouslyMutation(options): UseMutationResult<UserCredential, NativeFirebaseError, void, unknown>;
```

Defined in: [src/web/auth/useSignInAnonymouslyMutation.ts:41](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/auth/useSignInAnonymouslyMutation.ts#L41)

Executes a mutation and returns users credentials

## Parameters

### options

Configuration options for the mutation.

#### options?

`Omit`\<`UseMutationOptions`\<`UserCredential`, `NativeFirebaseError`, `void`, `unknown`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

## Returns

`UseMutationResult`\<`UserCredential`, `NativeFirebaseError`, `void`, `unknown`\>

A mutation result

## Example

```jsx
export const MyComponent = () => {
 const {mutate} = useSignInAnonymouslyMutation({
     options: {
     },
 });

 // ....
 mutate();
 // ....
};
```
