[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / getDocRef

# Function: getDocRef()

```ts
function getDocRef<AppModelType>(options): DocumentReference<AppModelType>
```

Defined in: [react-native/firestore/utils/getDocRef.ts:26](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/firestore/utils/getDocRef.ts#L26)

Retrieves a document reference based on provided database options.
Either `reference` or `path`.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

The options for building doc reference.

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

`DocumentReference`\<`AppModelType`\>

Returns a document reference
