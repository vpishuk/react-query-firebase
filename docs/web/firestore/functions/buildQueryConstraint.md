[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / buildQueryConstraint

# Function: buildQueryConstraint()

```ts
function buildQueryConstraint<AppModelType>(constraint): QueryNonFilterConstraint
```

Defined in: [web/firestore/useQueryConstraints.ts:45](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useQueryConstraints.ts#L45)

A generic mothod to build query constraints for firebase

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### constraint

[`NonFilterQueryConstraint`](../../../types/type-aliases/NonFilterQueryConstraint.md)\<`AppModelType`\>

## Returns

`QueryNonFilterConstraint`

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
