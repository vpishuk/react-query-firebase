[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / getDocRef

# Function: getDocRef()

```ts
function getDocRef<AppModelType>(options): DocumentReference<AppModelType, AppModelType>
```

Defined in: [web/firestore/utils/getDocRef.ts:24](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/utils/getDocRef.ts#L24)

Retrieves a document reference based on provided database options.
Either `reference` or `path`.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

## Parameters

### options

The options for building doc reference.

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

`DocumentReference`\<`AppModelType`, `AppModelType`\>

Returns a document reference
