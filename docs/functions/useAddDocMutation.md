[react-query-firebase](../globals.md) / useAddDocMutation

# Function: useAddDocMutation()

```ts
function useAddDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType, FirebaseError, {
  data: WithFieldValue<AppModelType>;
}, TContext>;
```

Defined in: [src/web/firestore/useAddDocMutation.ts:59](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useAddDocMutation.ts#L59)

Executes a mutation and returns added document

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

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
