[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useCollectionReference

# Function: useCollectionReference()

```ts
function useCollectionReference<AppModelType>(options): CollectionReference<AppModelType, AppModelType>
```

Defined in: [web/firestore/useCollectionReference.ts:44](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useCollectionReference.ts#L44)

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

  \| `CollectionReference`\<`AppModelType`, `AppModelType`\>
  \| `DocumentReference`\<`AppModelType`, `AppModelType`\>

CollectionReference or DocumentReference that is used as a root to lookup a sub-collection

## Returns

`CollectionReference`\<`AppModelType`, `AppModelType`\>

A reference to a Firestore collection

## Example

```jsx
export const MyComponent = () => {
 const ref = useCollectionReference({
     path: 'todos'
 });
};
```
