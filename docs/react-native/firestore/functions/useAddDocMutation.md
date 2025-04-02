[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useAddDocMutation

# Function: useAddDocMutation()

```ts
function useAddDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType, NativeFirebaseError, {
  data: WithFieldValue<AppModelType>;
}, TContext>
```

Defined in: [react-native/firestore/useAddDocMutation.ts:67](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useAddDocMutation.ts#L67)

Executes a mutation and returns added document

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for the mutation.

#### collectionReference

`CollectionReference`\<`AppModelType`\>

Reference to a collection where document must be added

#### options?

`Omit`\<`UseMutationOptions`\<`AppModelType`, `NativeFirebaseError`, \{
  `data`: `WithFieldValue`\<`AppModelType`\>;
 \}, `TContext`\>, `"mutationFn"`\> = `{}`

Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.

## Returns

`UseMutationResult`\<`AppModelType`, `NativeFirebaseError`, \{
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
