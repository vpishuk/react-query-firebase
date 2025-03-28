[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useDocReferences

# Function: useDocReferences()

```ts
function useDocReferences<AppModelType, DbModelType>(references): DocumentReference<AppModelType, DbModelType>[]
```

Defined in: [web/firestore/useDocReferences.ts:28](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/firestore/useDocReferences.ts#L28)

A custom hook to generate document references for Firebase Firestore documents using given
reference options.

The hook accepts an array of options, where each option may contain a path,
an existing reference, or path segments, and returns an array of generated
Firestore document references based on those options. The references can be used
to interact with the Firestore database documents. It uses memoization to optimize
reference generation.

## Type Parameters

### AppModelType

`AppModelType`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### references

[`UseDocReferencesOptions`](../type-aliases/UseDocReferencesOptions.md)\<`AppModelType`, `DbModelType`\>[]

An array of options
specifying how to generate document references. Each option may include a `path`
as a string, a `reference` as a Firestore reference, and `pathSegments` as an array of strings.

## Returns

`DocumentReference`\<`AppModelType`, `DbModelType`\>[]

An array of Firestore document references
generated from the options provided.
