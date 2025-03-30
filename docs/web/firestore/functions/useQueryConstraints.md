[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useQueryConstraints

# Function: useQueryConstraints()

```ts
function useQueryConstraints<AppModelType>(constraints): QueryNonFilterConstraint[]
```

Defined in: web/firestore/useQueryConstraints.ts:87

A hook to build a list of non-filter query constraints for firebase queries.
It uses buildQueryConstraint method and useMemo hook.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### constraints

#### constraints

[`NonFilterQueryConstraint`](../../../types/type-aliases/NonFilterQueryConstraint.md)\<`AppModelType`\>[]

A list of constraints such as limit, order, offset.

## Returns

`QueryNonFilterConstraint`[]

## Example

```jsx
const firebaseConfig = {};
export const constraint = useQueryConstraints([
 {
     type: 'limit',
     limit: 1
 }
]};
```
