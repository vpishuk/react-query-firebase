[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / getDocData

# Function: getDocData()

```ts
function getDocData<AppModelType>(options): Promise<null | AppModelType>
```

Defined in: [react-native/firestore/utils/getDocData.ts:20](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/utils/getDocData.ts#L20)

Asynchronously retrieves document data from a specified database reference.
Utilizes the helper function `getDocSnap` to fetch the document snapshot and
checks if the document exists before returning its data.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

The options for fetching document data.

#### db

`Module`

#### path?

`string`

#### pathSegments?

`string`[]

#### reference?

  \| `CollectionReference`\<`AppModelType`\>
  \| `DocumentReference`\<`AppModelType`\>

## Returns

`Promise`\<`null` \| `AppModelType`\>

Returns a promise that resolves to the document data if it exists, or null if the document does not exist.
