[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useDocReference

# Function: useDocReference()

```ts
function useDocReference<AppModelType>(options): null | DocumentReference<AppModelType>
```

Defined in: [react-native/firestore/useDocReference.ts:35](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useDocReference.ts#L35)

Gets a `CollectionReference` instance.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

Options

#### path?

`string`

#### pathSegments?

`string`[]

#### reference?

  \| `CollectionReference`\<`AppModelType`\>
  \| `DocumentReference`\<`AppModelType`\>

## Returns

`null` \| `DocumentReference`\<`AppModelType`\>

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
