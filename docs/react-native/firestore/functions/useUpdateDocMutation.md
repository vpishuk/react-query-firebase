[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useUpdateDocMutation

# Function: useUpdateDocMutation()

```ts
function useUpdateDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType & object, Error, {
  data: UpdateData<AppModelType>;
}, TContext>
```

Defined in: [react-native/firestore/useUpdateDocMutation.ts:58](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useUpdateDocMutation.ts#L58)

Executes a mutation and returns updated document

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for mutation.

#### options?

`Omit`\<`UseMutationOptions`\<`AppModelType`, `Error`, \{
  `data`: `UpdateData`\<`AppModelType`\>;
 \}, `TContext`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn.

#### reference

`null` \| `DocumentReference`\<`AppModelType`\>

Reference to a document that must be updated

## Returns

`UseMutationResult`\<`AppModelType` & `object`, `Error`, \{
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
