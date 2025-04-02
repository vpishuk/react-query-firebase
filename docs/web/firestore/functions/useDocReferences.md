[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useDocReferences

# Function: useDocReferences()

```ts
function useDocReferences<AppModelType>(options): DocumentReference<AppModelType, AppModelType>[]
```

Defined in: [web/firestore/useDocReferences.ts:32](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useDocReferences.ts#L32)

Gets `CollectionReference` instances

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

Options

#### references

`Omit`\<\{
  `db`: `Firestore`;
  `path`: `string`;
  `pathSegments`: `string`[];
  `reference`:   \| `CollectionReference`\<`AppModelType`, `AppModelType`\>
     \| `DocumentReference`\<`AppModelType`, `AppModelType`\>;
 \}, `"db"`\>[]

## Returns

`DocumentReference`\<`AppModelType`, `AppModelType`\>[]

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
