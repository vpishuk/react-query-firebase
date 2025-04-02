[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / getDocSnap

# Function: getDocSnap()

```ts
function getDocSnap<AppModelType>(options): Promise<null | DocumentSnapshot<AppModelType, AppModelType>>
```

Defined in: [web/firestore/utils/getDocSnap.ts:21](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/firestore/utils/getDocSnap.ts#L21)

Asynchronously retrieves a document snapshot from Firestore using a specified document reference
or path information. This function handles getting the appropriate document reference based on
the parameters provided, and then fetches the document data from Firestore.

## Type Parameters

### AppModelType

`AppModelType` *extends* [`AppModel`](../../../types/type-aliases/AppModel.md) = [`AppModel`](../../../types/type-aliases/AppModel.md)

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

`Promise`\<`null` \| `DocumentSnapshot`\<`AppModelType`, `AppModelType`\>\>

Returns a document reference
