[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useDocReferences

# Function: useDocReferences()

```ts
function useDocReferences<AppModelType>(references): DocumentReference<AppModelType>[]
```

Defined in: [react-native/firestore/useDocReferences.ts:32](https://github.com/vpishuk/react-query-firebase/blob/10e2945f75363a784c3dfc0e90b9f7a489dcc848/react-native/firestore/useDocReferences.ts#L32)

A custom hook to generate document references for Firebase Firestore documents using given
reference options.

The hook accepts an array of options, where each option may contain a path,
an existing reference, or path segments, and returns an array of generated
Firestore document references based on those options. The references can be used
to interact with the Firestore database documents. It uses memoization to optimize
reference generation.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### references

[`UseDocReferencesOptions`](../type-aliases/UseDocReferencesOptions.md)\<`AppModelType`\>[]

An array of options
specifying how to generate document references. Each option may include a `path`
as a string, a `reference` as a Firestore reference, and `pathSegments` as an array of strings.

## Returns

`DocumentReference`\<`AppModelType`\>[]

An array of Firestore document references
generated from the options provided.
