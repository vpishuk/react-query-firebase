[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useSetDocMutation

# Function: useSetDocMutation()

```ts
function useSetDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType & object, FirebaseError, {
  data: WithFieldValue<AppModelType>;
}, TContext>
```

Defined in: [web/firestore/useSetDocMutation.ts:59](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useSetDocMutation.ts#L59)

Executes a mutation and returns added document

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for mutation.

#### options?

`Omit`\<`UseMutationOptions`\<`AppModelType`, `FirebaseError`, \{
  `data`: `WithFieldValue`\<`AppModelType`\>;
 \}, `TContext`\>, `"mutationFn"`\>

Options for useMutation hook excluding mutationFn.

#### reference

`null` \| `DocumentReference`\<`AppModelType`, `AppModelType`\>

Reference to a document that must be written

## Returns

`UseMutationResult`\<`AppModelType` & `object`, `FirebaseError`, \{
  `data`: `WithFieldValue`\<`AppModelType`\>;
 \}, `TContext`\>

A mutation result

## Example

```jsx
export const MyComponent = () => {
 const {mutate} = useSetDocMutation({
     options: {
     },
     reference: collection().doc(),
 });

 // ....
 mutate({data: {test: 'value'}});
 // ....
};
```
