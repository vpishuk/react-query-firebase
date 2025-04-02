[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useDeleteDocMutation

# Function: useDeleteDocMutation()

```ts
function useDeleteDocMutation<AppModelType, TContext>(options): UseMutationResult<void, FirebaseError, void, TContext>
```

Defined in: [web/firestore/useDeleteDocMutation.ts:53](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useDeleteDocMutation.ts#L53)

Executes a query with specified constraints and returns the count of matched documents.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for the query.

#### options?

`Omit`\<`UseMutationOptions`\<`void`, `FirebaseError`, `void`, `TContext`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

#### reference

`null` \| `DocumentReference`\<`AppModelType`, `AppModelType`\>

A reference to a firestore document

## Returns

`UseMutationResult`\<`void`, `FirebaseError`, `void`, `TContext`\>

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
