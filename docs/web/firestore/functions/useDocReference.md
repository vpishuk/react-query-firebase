[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useDocReference

# Function: useDocReference()

```ts
function useDocReference<AppModelType>(options): null | DocumentReference<AppModelType, AppModelType>
```

Defined in: [web/firestore/useDocReference.ts:35](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/useDocReference.ts#L35)

Gets a `CollectionReference` instance

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

  \| `CollectionReference`\<`AppModelType`, `AppModelType`\>
  \| `DocumentReference`\<`AppModelType`, `AppModelType`\>

## Returns

`null` \| `DocumentReference`\<`AppModelType`, `AppModelType`\>

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
