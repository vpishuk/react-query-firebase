[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useBatchWrite

# Function: useBatchWrite()

```ts
function useBatchWrite(options): UseMutationResult<void, FirebaseError, (batch) => void | Promise<void>, unknown>
```

Defined in: [web/firestore/useBatchWrite.ts:47](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useBatchWrite.ts#L47)

Custom hook to perform batch write operations using Firestore.

## Parameters

### options

Configuration options for the query.

#### options?

`Omit`\<`UseMutationOptions`\<`void`, `FirebaseError`, (`batch`) => `void` \| `Promise`\<`void`\>, `unknown`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, (`batch`) => `void` \| `Promise`\<`void`\>, `unknown`\>

A mutation result

## Example

```jsx
export const MyComponent = () => {
 const {mutate} = useBatchWrite({
     options: {
     },
 });

 // ....
 mutate(() => {
     ref.update({...})
 });
 // ....
};
```
