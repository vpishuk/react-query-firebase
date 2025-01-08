[react-query-firebase](../../modules.md) / [firestore](../index.md) / useInfiniteQuery

# Function: useInfiniteQuery()

```ts
function useInfiniteQuery<AppModelType, DbModelType>(options): UseInfiniteQueryResult<InfiniteData<AppModelType[]>>
```

Defined in: [src/firestore/useInfiniteQuery.ts:62](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/firestore/useInfiniteQuery.ts#L62)

Custom hook that creates an infinite query using Firestore, allowing for query constraints, composite filters, and converters.
It fetches data in pages and can load more as required.

## Type Parameters

• **AppModelType** *extends* `DocumentData` = `DocumentData`

• **DbModelType** *extends* `DocumentData` = `DocumentData`

## Parameters

### options

`UseInfiniteQueryOptions`\<`AppModelType`, `DbModelType`, `QueryKey`\>

Configuration options for the infinite query, including Firestore query reference, query constraints, composite filter, and data converter.

## Returns

`UseInfiniteQueryResult`\<`InfiniteData`\<`AppModelType`[]\>\>

Result object containing the infinite data and methods for fetching more pages.
