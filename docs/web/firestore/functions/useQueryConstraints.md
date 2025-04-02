[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useQueryConstraints

# Function: useQueryConstraints()

```ts
function useQueryConstraints<AppModelType>(constraints): QueryNonFilterConstraint[]
```

Defined in: [web/firestore/useQueryConstraints.ts:38](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useQueryConstraints.ts#L38)

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
