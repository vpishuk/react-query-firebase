[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useGetRealtimeDocData

# Function: useGetRealtimeDocData()

```ts
function useGetRealtimeDocData<AppModelType>(options): object
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:67](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useGetRealtimeDocData.ts#L67)

A hook to get realtime updates to a firestore document.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### options

#### onError?

(`error`) => `unknown`

A callback to be called if the listen fails or is
cancelled. No further callbacks will occur.

#### path?

`string`

A slash-separated path to a document. Has to be omitted to use

#### pathSegments?

`string`[]

Additional path segments that will be applied relative
to the first argument.

#### reference?

  \| `CollectionReference`\<`AppModelType`\>
  \| `DocumentReference`\<`AppModelType`\>

A reference to a collection.

## Returns

`object`

### data

```ts
data: null | AppModelType;
```

### error

```ts
error: null | Error | NativeFirebaseError;
```

### isError

```ts
isError: boolean;
```

### isFetching

```ts
isFetching: boolean;
```

## Example

```jsx
const firebaseConfig = {};
export const MyComponent = () => {
 const result = useGetRealtimeDocData('collection/documentId');
 return (
     <div>
         {JSON.stringify(result)}
     </div>
 );
};
```
