[react-query-firebase](../globals.md) / useSetDocMutation

# Function: useSetDocMutation()

```ts
function useSetDocMutation<AppModelType, TContext>(options): UseMutationResult<AppModelType & object, FirebaseError, {
  data: WithFieldValue<AppModelType>;
}, TContext>;
```

Defined in: [src/web/firestore/useSetDocMutation.ts:59](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useSetDocMutation.ts#L59)

Executes a mutation and returns added document

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
  `data`: `WithFieldValue`\<`AppModelType`\>;
\}, `TContext`\>, `"mutationFn"`\>

Options for useMutation hook excluding mutationFn.

#### reference

`DocumentReference`\<`AppModelType`, `AppModelType`\> \| `null`

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
