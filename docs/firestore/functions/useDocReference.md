[react-query-firebase](../../modules.md) / [firestore](../index.md) / useDocReference

# Function: useDocReference()

```ts
function useDocReference<AppModelType, DbModelType>(options): null | DocumentReference<AppModelType, DbModelType>
```

Defined in: [src/firestore/useDocReference.ts:53](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useDocReference.ts#L53)

Custom hook to generate and manage a Firestore document reference.
This hook facilitates the retrieval of a Firestore document reference based on given options such as path and reference data.
The reference is updated whenever the associated path, reference, or path segments change.

## Type Parameters

• **AppModelType**

• **DbModelType** *extends* `DocumentData` = `DocumentData`

## Parameters

### options

[`UseDocReferenceOptions`](../type-aliases/UseDocReferenceOptions.md)\<`AppModelType`, `DbModelType`\>

Configuration options for setting up the document reference.

## Returns

`null` \| `DocumentReference`\<`AppModelType`, `DbModelType`\>

The Firestore document reference corresponding to the provided path and options, or null if not initialized.
