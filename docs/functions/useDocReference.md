[react-query-firebase](../globals.md) / useDocReference

# Function: useDocReference()

```ts
function useDocReference<AppModelType>(options): DocumentReference<AppModelType, AppModelType> | null;
```

Defined in: [src/web/firestore/useDocReference.ts:33](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useDocReference.ts#L33)

Gets a `CollectionReference` instance

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### options

[`UseDocReferenceOptions`](../type-aliases/UseDocReferenceOptions.md)\<`AppModelType`\>

Options

## Returns

`DocumentReference`\<`AppModelType`, `AppModelType`\> \| `null`

A reference to a Firestore document

## Example

```jsx
export const MyComponent = () => {
 const ref = useDocReference({
     reference: collection('todos')
     path: 'first'
 });
};
```
