[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useInfiniteQuery

# Function: useInfiniteQuery()

```ts
function useInfiniteQuery<AppModelType, TQueryKey>(options): UseInfiniteQueryResult<InfiniteData<AppModelType[], unknown>>
```

Defined in: [react-native/firestore/useInfiniteQuery.ts:89](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useInfiniteQuery.ts#L89)

Executes an infinite query on a Firestore data source and returns the resulting documents as an array.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

### TQueryKey

`TQueryKey` *extends* `QueryKey` = `QueryKey`

## Parameters

### options

Configuration options for the query.

#### collectionReference

`CollectionReference`\<`AppModelType`\>

Reference to a Firestore collection

#### compositeFilter?

[`QueryFilterConstraint`](../type-aliases/QueryFilterConstraint.md)

Composite filter

#### options

`Omit`\<`UseInfiniteQueryOptions`\<`AppModelType`[], `Error`, `InfiniteData`\<`AppModelType`[], `unknown`\>, `AppModelType`[], `TQueryKey`, `QueryNonFilterConstraint`\>, `"queryFn"`\> & `Required`\<`Pick`\<`UseInfiniteQueryOptions`\<`AppModelType`[], `Error`, `InfiniteData`\<`AppModelType`[], `unknown`\>, `AppModelType`[], `TQueryKey`, `QueryNonFilterConstraint`\>, `"queryKey"`\>\>

Reqct-query options that must include queryKey and shall not define queryFn

#### queryConstraints?

`QueryConstraint`[] \| `QueryNonFilterConstraint`[] = `[]`

Non composite filter constraints such as limit, order, where

## Returns

`UseInfiniteQueryResult`\<`InfiniteData`\<`AppModelType`[], `unknown`\>\>

An object containing documents that match the query.

## Example

```jsx
export const MyComponent = () => {
 const docs = useInfiniteQuery({
     options: {
         queryKey: ['key']
     },
     collectionReference: collection(),
 });
 console.log(docs);
};
```
