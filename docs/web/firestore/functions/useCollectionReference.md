[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useCollectionReference

# Function: useCollectionReference()

```ts
function useCollectionReference<AppModelType, DbModelType>(options): CollectionReference<DocumentData, DocumentData>
```

Defined in: [web/firestore/useCollectionReference.ts:23](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useCollectionReference.ts#L23)

Creates a reference to a Firestore collection based on the provided path, reference, and path segments.

This hook utilizes useMemo for optimization, ensuring the collection reference is recalculated only when its dependencies change.

## Type Parameters

### AppModelType

`AppModelType`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### options

[`UseCollectionReferenceOptions`](../type-aliases/UseCollectionReferenceOptions.md)\<`AppModelType`, `DbModelType`\>

The options including path, reference, and pathSegments to construct the Firestore collection reference.

## Returns

`CollectionReference`\<`DocumentData`, `DocumentData`\>

A Firestore collection reference constructed using the specified path, reference, and path segments.
