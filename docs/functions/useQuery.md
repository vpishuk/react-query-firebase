[react-query-firebase](../globals.md) / useQuery

# Function: useQuery()

```ts
function useQuery<AppModelType>(options): UseQueryResult<AppModelType[]>;
```

Defined in: [src/web/firestore/useQuery.ts:66](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useQuery.ts#L66)

Executes a query on a Firestore data source and returns the resulting documents as an array.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

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

`Omit`\<`UseQueryOptions`\<`AppModelType`[], `Error`, `AppModelType`[], readonly `unknown`[]\>, `"queryFn"`\> & `Required`\<`Pick`\<`UseQueryOptions`\<`AppModelType`[], `Error`, `AppModelType`[], readonly `unknown`[]\>, `"queryKey"`\>\>

Reqct-query options that must include queryKey and shall not define queryFn

#### queryConstraints?

`QueryConstraint`[] \| `QueryNonFilterConstraint`[] = `[]`

Non composite filter constraints such as limit, order, where

## Returns

`UseQueryResult`\<`AppModelType`[]\>

An object containing documents that match the query.

## Example

```jsx
export const MyComponent = () => {
 const docs = useQuery({
     options: {
         queryKey: ['key']
     },
     collectionReference: collection(),
 });
 console.log(docs);
};
```
