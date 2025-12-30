[react-query-firebase](../globals.md) / useGetRealtimeDocData

# Function: useGetRealtimeDocData()

```ts
function useGetRealtimeDocData<AppModelType>(options): object;
```

Defined in: [src/web/firestore/useGetRealtimeDocData.ts:64](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/useGetRealtimeDocData.ts#L64)

A hook to get realtime updates to a firestore document.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

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

`DocumentReference`\<`AppModelType`, `AppModelType`\>

A reference to a collection.

## Returns

`object`

### data

```ts
data: AppModelType | null;
```

### error

```ts
error: FirebaseError | null;
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
