[react-query-firebase](../globals.md) / useDocReferences

# Function: useDocReferences()

```ts
function useDocReferences<AppModelType>(options): (DocumentReference<AppModelType, AppModelType> | null)[];
```

Defined in: [src/web/firestore/useDocReferences.ts:32](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useDocReferences.ts#L32)

Gets `CollectionReference` instances

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### options

Options

#### references

`Omit`\<\{
  `db`: `Firestore`;
  `path?`: `string`;
  `pathSegments?`: `string`[];
  `reference?`:   \| `CollectionReference`\<`AppModelType`, `AppModelType`\>
     \| `DocumentReference`\<`AppModelType`, `AppModelType`\>;
\}, `"db"`\>[]

## Returns

(`DocumentReference`\<`AppModelType`, `AppModelType`\> \| `null`)[]

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
