[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useDocReference

# Function: useDocReference()

```ts
function useDocReference<AppModelType, DbModelType>(options): null | DocumentReference<AppModelType, DbModelType>
```

Defined in: [web/firestore/useDocReference.ts:53](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useDocReference.ts#L53)

Custom hook to generate and manage a Firestore document reference.
This hook facilitates the retrieval of a Firestore document reference based on given options such as path and reference data.
The reference is updated whenever the associated path, reference, or path segments change.

## Type Parameters

### AppModelType

`AppModelType`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### options

[`UseDocReferenceOptions`](../type-aliases/UseDocReferenceOptions.md)\<`AppModelType`, `DbModelType`\>

Configuration options for setting up the document reference.

## Returns

`null` \| `DocumentReference`\<`AppModelType`, `DbModelType`\>

The Firestore document reference corresponding to the provided path and options, or null if not initialized.
