[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / buildQueryConstraint

# Function: buildQueryConstraint()

```ts
function buildQueryConstraint<AppModelType>(constraint): QueryOrderByConstraint | QueryLimitConstraint | QueryStartAtConstraint
```

Defined in: [react-native/firestore/useQueryConstraints.ts:36](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useQueryConstraints.ts#L36)

A generic mothod to build query constraints for firebase

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### constraint

[`NonFilterQueryConstraint`](../../../types/type-aliases/NonFilterQueryConstraint.md)\<`AppModelType`\>

## Returns

`QueryOrderByConstraint` \| `QueryLimitConstraint` \| `QueryStartAtConstraint`

## Example

```jsx
const firebaseConfig = {};
export const constraint = useMemo(() => {
 return buildQueryConstraint({
     type: 'limit',
     limit: 1
 });
};
```
