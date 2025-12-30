[react-query-firebase](../globals.md) / buildQueryConstraint

# Function: buildQueryConstraint()

```ts
function buildQueryConstraint<AppModelType>(constraint): QueryNonFilterConstraint;
```

Defined in: [src/web/firestore/utils/buildQueryConstraint.ts:34](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/buildQueryConstraint.ts#L34)

A generic mothod to build query constraints for firebase

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### constraint

[`NonFilterQueryConstraint`](../type-aliases/NonFilterQueryConstraint.md)\<`AppModelType`\>

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
