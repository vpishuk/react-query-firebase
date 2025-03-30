[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useDocReference

# Function: useDocReference()

```ts
function useDocReference<AppModelType>(options): DocumentReference<AppModelType>
```

Defined in: [react-native/firestore/useDocReference.ts:51](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useDocReference.ts#L51)

Custom hook to generate and manage a Firestore document reference.
This hook facilitates the retrieval of a Firestore document reference based on given options such as path and reference data.
The reference is updated whenever the associated path, reference, or path segments change.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### options

[`UseDocReferenceOptions`](../type-aliases/UseDocReferenceOptions.md)\<`AppModelType`\>

Configuration options for setting up the document reference.

## Returns

`DocumentReference`\<`AppModelType`\>

The Firestore document reference corresponding to the provided path and options, or null if not initialized.
