[react-query-firebase](../../modules.md) / [firestore](../index.md) / useCollectionReference

# Function: useCollectionReference()

```ts
function useCollectionReference<AppModelType, DbModelType>(options): CollectionReference
```

Defined in: [src/firestore/useCollectionReference.ts:23](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/firestore/useCollectionReference.ts#L23)

Creates a reference to a Firestore collection based on the provided path, reference, and path segments.

This hook utilizes useMemo for optimization, ensuring the collection reference is recalculated only when its dependencies change.

## Type Parameters

• **AppModelType**

• **DbModelType** *extends* `DocumentData` = `DocumentData`

## Parameters

### options

[`UseCollectionReferenceOptions`](../type-aliases/UseCollectionReferenceOptions.md)\<`AppModelType`, `DbModelType`\>

The options including path, reference, and pathSegments to construct the Firestore collection reference.

## Returns

`CollectionReference`

A Firestore collection reference constructed using the specified path, reference, and path segments.
