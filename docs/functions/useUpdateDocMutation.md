[react-query-firebase](../globals.md) / useUpdateDocMutation

# Function: useUpdateDocMutation()

```ts
function useUpdateDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType & object, FirebaseError, {
  data: UpdateData<AppModelType>;
}, TContext>;
```

Defined in: [src/web/firestore/useUpdateDocMutation.ts:59](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useUpdateDocMutation.ts#L59)

Executes a mutation and returns updated document

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for mutation.

#### options?

`Omit`\<`UseMutationOptions`\<`AppModelType`, `FirebaseError`, \{
  `data`: `UpdateData`\<`AppModelType`\>;
\}, `TContext`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn.

#### reference

`DocumentReference`\<`AppModelType`, `AppModelType`\> \| `null`

Reference to a document that must be updated

## Returns

`UseMutationResult`\<`AppModelType` & `object`, `FirebaseError`, \{
  `data`: `UpdateData`\<`AppModelType`\>;
\}, `TContext`\>

A mutation result

## Example

```jsx
export const MyComponent = () => {
 const {mutate} = useUpdateDocMutation({
     options: {
     },
     reference: collection().doc(),
 });

 // ....
 mutate({data: {test: 'value'}});
 // ....
};
```
