[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useCompositeFilter

# Function: useCompositeFilter()

```ts
function useCompositeFilter<AppModelType>(query): 
  | undefined
  | QueryFilterConstraint
```

Defined in: [react-native/firestore/useCompositeFilter.ts:113](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useCompositeFilter.ts#L113)

A custom hook that constructs a composite or where query filter based on the provided query structure.
It recursively builds query constraints using logical "or" or "and" operators.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### query

#### query?

[`CompositeFilter`](../type-aliases/CompositeFilter.md)\<`AppModelType`\>

## Returns

  \| `undefined`
  \| [`QueryFilterConstraint`](../type-aliases/QueryFilterConstraint.md)

## Example

```jsx
export const MyComponent = () => {
 const filter = useCompositeFilter({
     operator: "AND",
     children: [
         {
             field: "field",
             value: "value",
             op: "=="
         },
         ...(query ? [query] : [])
     ]
 });
 console.log(filter);
};
```
