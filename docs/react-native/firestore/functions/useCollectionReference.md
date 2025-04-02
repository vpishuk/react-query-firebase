[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useCollectionReference

# Function: useCollectionReference()

```ts
function useCollectionReference<AppModelType>(options): CollectionReference<AppModelType>
```

Defined in: [react-native/firestore/useCollectionReference.ts:46](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useCollectionReference.ts#L46)

Gets a `CollectionReference` instance that refers to a subcollection of
`reference` at the specified relative path.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

Options

#### path

`string`

A slash-separated path to a collection.

#### pathSegments?

`string`[]

Additional path segments that will be applied relative

#### reference?

  \| `CollectionReference`\<`AppModelType`\>
  \| `DocumentReference`\<`AppModelType`\>

CollectionReference or DocumentReference that is used as a root to lookup a sub-collection

## Returns

`CollectionReference`\<`AppModelType`\>

A reference to a Firestore collection

## Example

```jsx
export const MyComponent = () => {
 const ref = useCollectionReference({
     path: 'todos'
 });
};
```
