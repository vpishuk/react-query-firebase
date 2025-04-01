[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / UseGetRealtimeDocDataOptions

# Type Alias: UseGetRealtimeDocDataOptions\<AppModelType, DbModelType\>

```ts
type UseGetRealtimeDocDataOptions<AppModelType, DbModelType> = object;
```

Defined in: [web/firestore/useGetRealtimeDocData.ts:10](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useGetRealtimeDocData.ts#L10)

## Type Parameters

### AppModelType

`AppModelType`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Properties

### onError()?

```ts
optional onError: (error) => unknown;
```

Defined in: [web/firestore/useGetRealtimeDocData.ts:28](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useGetRealtimeDocData.ts#L28)

A callback to be called if the listen fails or is
cancelled. No further callbacks will occur.

#### Parameters

##### error

`FirebaseError`

#### Returns

`unknown`

***

### path?

```ts
optional path: string;
```

Defined in: [web/firestore/useGetRealtimeDocData.ts:14](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useGetRealtimeDocData.ts#L14)

A slash-separated path to a document. Has to be omitted to use

***

### pathSegments?

```ts
optional pathSegments: string[];
```

Defined in: [web/firestore/useGetRealtimeDocData.ts:23](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useGetRealtimeDocData.ts#L23)

Additional path segments that will be applied relative
to the first argument.

***

### reference?

```ts
optional reference: 
  | CollectionReference<AppModelType, DbModelType>
| DocumentReference<AppModelType, DbModelType>;
```

Defined in: [web/firestore/useGetRealtimeDocData.ts:18](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/web/firestore/useGetRealtimeDocData.ts#L18)

A reference to a collection.
