[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useRunTransaction

# Function: useRunTransaction()

```ts
function useRunTransaction<T, TContext>(options): UseMutationResult<T, FirebaseError, <T>(transaction) => T, TContext>
```

Defined in: [web/firestore/useRunTransaction.ts:45](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useRunTransaction.ts#L45)

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

`Omit`\<`UseMutationOptions`\<`T`, `FirebaseError`, \<`T`\>(`transaction`) => `T`, `TContext`\>, `"mutationFn"`\> = `{}`

Reqct-mutation options that shall omit mutationFn

## Returns

`UseMutationResult`\<`T`, `FirebaseError`, \<`T`\>(`transaction`) => `T`, `TContext`\>

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
