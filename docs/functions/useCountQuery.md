[react-query-firebase](../globals.md) / useCountQuery

# Function: useCountQuery()

```ts
function useCountQuery<AppModelType>(options): UseQueryResult<number>;
```

Defined in: [src/web/firestore/useCountQuery.ts:66](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useCountQuery.ts#L66)

Executes a query with specified constraints and returns the count of matched documents.

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

`Omit`\<`UseQueryOptions`\<`number`, `Error`, `number`, readonly `unknown`[]\>, `"queryFn"`\> & `Required`\<`Pick`\<`UseQueryOptions`\<`number`, `Error`, `number`, readonly `unknown`[]\>, `"queryKey"`\>\>

Reqct-query options that must include queryKey and shall not define queryFn

#### queryConstraints?

`QueryConstraint`[] \| `QueryNonFilterConstraint`[] = `[]`

Non composite filter constraints such as limit, order, where

## Returns

`UseQueryResult`\<`number`\>

An object containing the number of documents that match the query.

## Example

```jsx
export const MyComponent = () => {
 const count = useCountQuery({
     options: {
         queryKey: ['key']
     },
     collectionReference: collection(),
 });
 console.log(count);
};
```
