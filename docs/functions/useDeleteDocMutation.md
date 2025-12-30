[react-query-firebase](../globals.md) / useDeleteDocMutation

# Function: useDeleteDocMutation()

```ts
function useDeleteDocMutation<AppModelType, TContext>(options): UseMutationResult<void, FirebaseError, void, TContext>;
```

Defined in: [src/web/firestore/useDeleteDocMutation.ts:53](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useDeleteDocMutation.ts#L53)

Executes a query with specified constraints and returns the count of matched documents.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for the query.

#### options?

`Omit`\<`UseMutationOptions`\<`void`, `FirebaseError`, `void`, `TContext`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

#### reference

`DocumentReference`\<`AppModelType`, `AppModelType`\> \| `null`

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
