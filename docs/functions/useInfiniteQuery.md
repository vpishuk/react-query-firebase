[react-query-firebase](../globals.md) / useInfiniteQuery

# Function: useInfiniteQuery()

```ts
function useInfiniteQuery<AppModelType, TQueryKey>(options): UseInfiniteQueryResult<InfiniteData<AppModelType[], unknown>>;
```

Defined in: [src/web/firestore/useInfiniteQuery.ts:88](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useInfiniteQuery.ts#L88)

Executes an infinite query on a Firestore data source and returns the resulting documents as an array.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

### TQueryKey

`TQueryKey` *extends* readonly `unknown`[] = readonly `unknown`[]

## Parameters

### options

Configuration options for the query.

#### collectionReference

`CollectionReference`\<`AppModelType`, `AppModelType`\>

Reference to a Firestore collection

#### compositeFilter?

[`QueryFilterConstraint`](../type-aliases/QueryFilterConstraint.md)

Composite filter

#### options

`Omit`\<`UseInfiniteQueryOptions`\<`AppModelType`[], `Error`, `InfiniteData`\<`AppModelType`[], `unknown`\>, `TQueryKey`, `QueryNonFilterConstraint`\>, `"queryFn"`\> & `Required`\<`Pick`\<`UseInfiniteQueryOptions`\<`AppModelType`[], `Error`, `InfiniteData`\<`AppModelType`[], `unknown`\>, `TQueryKey`, `QueryNonFilterConstraint`\>, `"queryKey"`\>\>

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
