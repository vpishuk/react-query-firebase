[react-query-firebase](../globals.md) / buildCompositeFilter

# Function: buildCompositeFilter()

```ts
function buildCompositeFilter<AppModelType>(query): 
  | QueryFilterConstraint
  | null;
```

Defined in: [src/web/firestore/utils/buildCompositeFilter.ts:55](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildCompositeFilter.ts#L55)

Constructs a composite or where query filter based on the provided query structure.
It recursively builds query constraints using logical "or" or "and" operators.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### query

[`QueryElement`](../type-aliases/QueryElement.md)\<`AppModelType`\>

## Returns

  \| [`QueryFilterConstraint`](../type-aliases/QueryFilterConstraint.md)
  \| `null`

## Example

```jsx
export const MyComponent = () => {
 const filter = buildCompositeFilter({
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
