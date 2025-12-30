[react-query-firebase](../globals.md) / useQueryConstraints

# Function: useQueryConstraints()

```ts
function useQueryConstraints<AppModelType>(constraints): QueryNonFilterConstraint[];
```

Defined in: [src/web/firestore/useQueryConstraints.ts:38](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useQueryConstraints.ts#L38)

A hook to build a list of non-filter query constraints for firebase queries.
It uses buildQueryConstraint method and useMemo hook.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### constraints

#### constraints

[`NonFilterQueryConstraint`](../type-aliases/NonFilterQueryConstraint.md)\<`AppModelType`\>[]

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
