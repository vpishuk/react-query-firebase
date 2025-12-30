[react-query-firebase](../globals.md) / useCompositeFilter

# Function: useCompositeFilter()

```ts
function useCompositeFilter<AppModelType>(query): QueryCompositeFilterConstraint | undefined;
```

Defined in: [src/web/firestore/useCompositeFilter.ts:41](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useCompositeFilter.ts#L41)

A custom hook that constructs a composite or where query filter based on the provided query structure.
It recursively builds query constraints using logical "or" or "and" operators.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### query

#### query?

[`CompositeFilter`](../type-aliases/CompositeFilter.md)\<`AppModelType`\>

## Returns

`QueryCompositeFilterConstraint` \| `undefined`

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
