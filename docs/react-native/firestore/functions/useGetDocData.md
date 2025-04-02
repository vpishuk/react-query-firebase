[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useGetDocData

# Function: useGetDocData()

```ts
function useGetDocData<AppModelType>(options): UseQueryResult<AppModelType, Error>
```

Defined in: [react-native/firestore/useGetDocData.ts:40](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useGetDocData.ts#L40)

Executes a query on a Firestore data source and returns the resulting document.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

Configuration options for the query.

#### options

`Omit`\<`UseQueryOptions`\<`null` \| `AppModelType`, `Error`, `AppModelType`, `QueryKey`\>, `"queryFn"`\> & `Required`\<`Pick`\<`UseQueryOptions`\<`AppModelType`, `Error`, `AppModelType`, `QueryKey`\>, `"queryKey"`\>\>

Reqct-query options that must include queryKey and shall not define queryFn

#### path?

`string`

#### pathSegments?

`string`[]

#### reference?

  \| `CollectionReference`\<`AppModelType`\>
  \| `DocumentReference`\<`AppModelType`\>

## Returns

`UseQueryResult`\<`AppModelType`, `Error`\>

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
