[react-query-firebase](../globals.md) / getDocRef

# Function: getDocRef()

```ts
function getDocRef<AppModelType>(options): DocumentReference<AppModelType, AppModelType> | null;
```

Defined in: [src/web/firestore/utils/getDocRef.ts:24](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/getDocRef.ts#L24)

Retrieves a document reference based on provided database options.
Either `reference` or `path`.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

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

`DocumentReference`\<`AppModelType`, `AppModelType`\> \| `null`

Returns a document reference
