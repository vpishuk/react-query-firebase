[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useRunTransaction

# Function: useRunTransaction()

```ts
function useRunTransaction<T, TContext>(options): UseMutationResult<T, Error, <T>(transaction) => T, TContext>
```

Defined in: [react-native/firestore/useRunTransaction.ts:44](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useRunTransaction.ts#L44)

Executes a Firestore transaction

## Type Parameters

### T

`T` = `unknown`

### TContext

`TContext` = `unknown`

## Parameters

### options

Configuration options for the mutation.

#### options?

`Omit`\<`UseMutationOptions`\<`T`, `Error`, \<`T`\>(`transaction`) => `T`, `TContext`\>, `"mutationFn"`\> = `{}`

Reqct-mutation options that shall omit mutationFn

## Returns

`UseMutationResult`\<`T`, `Error`, \<`T`\>(`transaction`) => `T`, `TContext`\>

An object representing mutation

## Example

```jsx
export const MyComponent = () => {
 const doc = useGetDocData({
     options: {
         queryKey: ['key']
     },
     reference: collection(),
     path: 'id'
 });
 console.log(doc);
};
```
