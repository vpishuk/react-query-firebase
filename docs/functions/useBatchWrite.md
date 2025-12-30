[react-query-firebase](../globals.md) / useBatchWrite

# Function: useBatchWrite()

```ts
function useBatchWrite(options): UseMutationResult<void, FirebaseError, (batch) => void | Promise<void>, unknown>;
```

Defined in: [src/web/firestore/useBatchWrite.ts:47](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useBatchWrite.ts#L47)

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
