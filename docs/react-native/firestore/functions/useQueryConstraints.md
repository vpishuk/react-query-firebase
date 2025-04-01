[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useQueryConstraints

# Function: useQueryConstraints()

```ts
function useQueryConstraints<AppModelType>(options): (QueryOrderByConstraint | QueryLimitConstraint | QueryStartAtConstraint)[]
```

Defined in: [react-native/firestore/useQueryConstraints.ts:78](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useQueryConstraints.ts#L78)

A hook to build a list of non-filter query constraints for firebase queries.
It uses buildQueryConstraint method and useMemo hook.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

#### constraints

[`NonFilterQueryConstraint`](../../../types/type-aliases/NonFilterQueryConstraint.md)\<`AppModelType`\>[]

A list of constraints such as limit, order, offset.

## Returns

(`QueryOrderByConstraint` \| `QueryLimitConstraint` \| `QueryStartAtConstraint`)[]

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
