[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useAddDocMutation

# Function: useAddDocMutation()

```ts
function useAddDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, {
  data: WithFieldValue<AppModelType>;
}, TContext>
```

Defined in: [web/firestore/useAddDocMutation.ts:59](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useAddDocMutation.ts#L59)

Executes a mutation and returns added document

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for the mutation.

#### collectionReference

`CollectionReference`\<`AppModelType`, `AppModelType`\>

Reference to a collection where document must be added

#### options?

`Omit`\<`UseMutationOptions`\<`AppModelType`, `FirebaseError`, \{
  `data`: `WithFieldValue`\<`AppModelType`\>;
 \}, `TContext`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

## Returns

`UseMutationResult`\<`AppModelType`, `FirebaseError`, \{
  `data`: `WithFieldValue`\<`AppModelType`\>;
 \}, `TContext`\>

A mutation result

## Example

```jsx
export const MyComponent = () => {
 const {mutate} = useAddDocMutation({
     options: {
     },
     reference: collection(),
 });

 // ....
 mutate({data: {test: 'value'}});
 // ....
};
```
