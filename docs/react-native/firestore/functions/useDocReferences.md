[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useDocReferences

# Function: useDocReferences()

```ts
function useDocReferences<AppModelType>(options): DocumentReference<AppModelType>[]
```

Defined in: [react-native/firestore/useDocReferences.ts:32](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useDocReferences.ts#L32)

Gets `CollectionReference` instances

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

Options

#### references

`Omit`\<\{
  `db`: `Module`;
  `path`: `string`;
  `pathSegments`: `string`[];
  `reference`:   \| `CollectionReference`\<`AppModelType`\>
     \| `DocumentReference`\<`AppModelType`\>;
 \}, `"db"`\>[]

## Returns

`DocumentReference`\<`AppModelType`\>[]

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
