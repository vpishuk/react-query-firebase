[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / buildCompositeFilter

# Function: buildCompositeFilter()

```ts
function buildCompositeFilter<AppModelType>(query): 
  | null
  | QueryFilterConstraint
```

Defined in: react-native/firestore/utils/buildCompositeFilter.ts:49

Constructs a composite or where query filter based on the provided query structure.
It recursively builds query constraints using logical "or" or "and" operators.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### query

[`QueryElement`](../type-aliases/QueryElement.md)\<`AppModelType`\>

## Returns

  \| `null`
  \| [`QueryFilterConstraint`](../type-aliases/QueryFilterConstraint.md)

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
