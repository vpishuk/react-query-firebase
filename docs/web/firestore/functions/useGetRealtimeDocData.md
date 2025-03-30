[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useGetRealtimeDocData

# Function: useGetRealtimeDocData()

```ts
function useGetRealtimeDocData<AppModelType, DbModelType>(options): object
```

Defined in: [web/firestore/useGetRealtimeDocData.ts:63](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useGetRealtimeDocData.ts#L63)

A hook to get realtime updates to a firestore document.

## Type Parameters

### AppModelType

`AppModelType`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

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

  \| `CollectionReference`\<`AppModelType`, `DbModelType`\>
  \| `DocumentReference`\<`AppModelType`, `DbModelType`\>

A reference to a collection.

## Returns

`object`

### data

```ts
data: null | AppModelType;
```

### error

```ts
error: null | FirebaseError;
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
