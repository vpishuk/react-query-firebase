[react-query-firebase](../globals.md) / getDocSnap

# Function: getDocSnap()

```ts
function getDocSnap<AppModelType>(options): Promise<DocumentSnapshot<AppModelType, AppModelType> | null>;
```

Defined in: [src/web/firestore/utils/getDocSnap.ts:21](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/firestore/utils/getDocSnap.ts#L21)

Asynchronously retrieves a document snapshot from Firestore using a specified document reference
or path information. This function handles getting the appropriate document reference based on
the parameters provided, and then fetches the document data from Firestore.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../type-aliases/AppModel.md) = [`AppModel`](../type-aliases/AppModel.md)

## Parameters

### options

The options for retrieving the document snapshot

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

`Promise`\<`DocumentSnapshot`\<`AppModelType`, `AppModelType`\> \| `null`\>

Returns a document reference
