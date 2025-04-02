[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / UseGetRealtimeDocDataOptions

# Type Alias: UseGetRealtimeDocDataOptions\<AppModelType\>

```ts
type UseGetRealtimeDocDataOptions<AppModelType> = object;
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:11](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useGetRealtimeDocData.ts#L11)

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Properties

### onError()?

```ts
optional onError: (error) => unknown;
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:29](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useGetRealtimeDocData.ts#L29)

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

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:15](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useGetRealtimeDocData.ts#L15)

A slash-separated path to a document. Has to be omitted to use

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:24](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useGetRealtimeDocData.ts#L24)

Additional path segments that will be applied relative
to the first argument.

***

### reference?

```ts
optional reference: FirebaseFirestoreTypes.DocumentReference<AppModelType>;
```

Defined in: [react-native/firestore/useGetRealtimeDocData.ts:19](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/useGetRealtimeDocData.ts#L19)

A reference to a collection.
