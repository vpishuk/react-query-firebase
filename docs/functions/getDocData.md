[react-query-firebase](../globals.md) / getDocData

# Function: getDocData()

```ts
function getDocData<AppModelType>(options): Promise<AppModelType & object | null>;
```

Defined in: [src/web/firestore/utils/getDocData.ts:20](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/getDocData.ts#L20)

Asynchronously retrieves document data from a specified database reference.
Utilizes the helper function `getDocSnap` to fetch the document snapshot and
checks if the document exists before returning its data.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### options

The options for fetching document data.

#### db

`Firestore`

#### path?

`string`

#### pathSegments?

`string`[]

#### reference?

  \| `CollectionReference`\<`AppModelType`, `AppModelType`\>
  \| `DocumentReference`\<`AppModelType`, `AppModelType`\>

## Returns

`Promise`\<`AppModelType` & `object` \| `null`\>

Returns a promise that resolves to the document data if it exists, or null if the document does not exist.
