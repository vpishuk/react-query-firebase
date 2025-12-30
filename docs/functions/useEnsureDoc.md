[react-query-firebase](../globals.md) / useEnsureDoc

# Function: useEnsureDoc()

```ts
function useEnsureDoc<AppModelType>(options): UseQueryResult<NoInfer<AppModelType>, Error>;
```

Defined in: [src/web/firestore/useEnsureDoc.ts:49](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useEnsureDoc.ts#L49)

This hook checks if a doc with a requested reference exists.
It creates a document with requested data if it does not exist.

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

Configuration options for mutation.

## Returns

`UseQueryResult`\<`NoInfer`\<`AppModelType`\>, `Error`\>

A mutation result

## Example

```jsx
export const MyComponent = () => {
 const {data} = useEnsureDocQuery({
     options: {
     },
     reference: collection().doc(),
     defaults: {prop1: 'value1'}
 });

};
```
