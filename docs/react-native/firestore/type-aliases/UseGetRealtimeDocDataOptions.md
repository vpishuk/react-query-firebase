[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseGetRealtimeDocDataOptions

# Type Alias: UseGetRealtimeDocDataOptions\<AppModelType\>

```ts
type UseGetRealtimeDocDataOptions<AppModelType> = object;
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:10](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useGetRealtimeDocData.ts#L10)

## Type Parameters

### AppModelType

`AppModelType` *extends* `FirebaseFirestoreTypes.DocumentData` = `FirebaseFirestoreTypes.DocumentData`

## Properties

### onError()?

```ts
optional onError: (error) => unknown;
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:32](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useGetRealtimeDocData.ts#L32)

A callback to be called if the listen fails or is
cancelled. No further callbacks will occur.

#### Parameters

##### error

`ReactNativeFirebase.NativeFirebaseError` | `Error`

#### Returns

`unknown`

***

### path?

```ts
optional path: string;
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:16](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useGetRealtimeDocData.ts#L16)

A slash-separated path to a document. Has to be omitted to use

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:27](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useGetRealtimeDocData.ts#L27)

Additional path segments that will be applied relative
to the first argument.

***

### reference?

```ts
optional reference: 
  | FirebaseFirestoreTypes.CollectionReference<AppModelType>
| FirebaseFirestoreTypes.DocumentReference<AppModelType>;
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:20](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useGetRealtimeDocData.ts#L20)

A reference to a collection.
