[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useDeleteDocMutation

# Function: useDeleteDocMutation()

```ts
function useDeleteDocMutation<AppModelType, TContext>(options): UseMutationResult<void, Error, void, TContext>
```

Defined in: [react-native/firestore/useDeleteDocMutation.ts:52](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useDeleteDocMutation.ts#L52)

Executes a query with specified constraints and returns the count of matched documents.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for the query.

#### options?

`Omit`\<`UseMutationOptions`\<`void`, `Error`, `void`, `TContext`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

#### reference

`null` \| `DocumentReference`\<`AppModelType`\>

A reference to a firestore document

## Returns

`UseMutationResult`\<`void`, `Error`, `void`, `TContext`\>

A mutation result

## Example

```jsx
export const MyComponent = () => {
 const {mutate} = useDeleteDocMutation({
     options: {
     },
     reference: document(),
 });

 // ....
 mutate();
 // ....
};
```
