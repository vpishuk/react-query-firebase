[react-query-firebase](../globals.md) / useGetDocData

# Function: useGetDocData()

```ts
function useGetDocData<AppModelType>(options): UseQueryResult<NoInfer<AppModelType>, Error>;
```

Defined in: [src/web/firestore/useGetDocData.ts:40](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useGetDocData.ts#L40)

Executes a query on a Firestore data source and returns the resulting document.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### options

`object` & `Omit`\<\{
  `db`: `Firestore`;
  `path?`: `string`;
  `pathSegments?`: `string`[];
  `reference?`:   \| `CollectionReference`\<`AppModelType`, `AppModelType`\>
     \| `DocumentReference`\<`AppModelType`, `AppModelType`\>;
\}, `"db"`\>

Configuration options for the query.

## Returns

`UseQueryResult`\<`NoInfer`\<`AppModelType`\>, `Error`\>

An object containing document's data

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
