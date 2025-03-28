[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useCollectionReference

# Function: useCollectionReference()

```ts
function useCollectionReference<AppModelType>(options): CollectionReference<AppModelType>
```

Defined in: [react-native/firestore/useCollectionReference.ts:27](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/firestore/useCollectionReference.ts#L27)

Creates a reference to a Firestore collection based on the provided path, reference, and path segments.

This hook utilizes useMemo for optimization, ensuring the collection reference is recalculated only when its dependencies change.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### options

[`UseCollectionReferenceOptions`](../type-aliases/UseCollectionReferenceOptions.md)\<`AppModelType`\>

The options including path, reference, and pathSegments to construct the Firestore collection reference.

## Returns

`CollectionReference`\<`AppModelType`\>

A Firestore collection reference constructed using the specified path, reference, and path segments.
