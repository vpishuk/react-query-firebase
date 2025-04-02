[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / buildQueryConstraint

# Function: buildQueryConstraint()

```ts
function buildQueryConstraint<AppModelType>(constraint): QueryNonFilterConstraint
```

Defined in: react-native/firestore/utils/buildQueryConstraint.ts:33

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
