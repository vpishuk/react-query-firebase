[react-query-firebase](../../../modules.md) / [web/firestore](../index.md) / useInfiniteQuery

# Function: useInfiniteQuery()

```ts
function useInfiniteQuery<AppModelType, DbModelType>(options): UseInfiniteQueryResult<InfiniteData<AppModelType[], unknown>>
```

Defined in: [web/firestore/useInfiniteQuery.ts:62](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/firestore/useInfiniteQuery.ts#L62)

Custom hook that creates an infinite query using Firestore, allowing for query constraints, composite filters, and converters.
It fetches data in pages and can load more as required.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

### DbModelType

`DbModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### options

`UseInfiniteQueryOptions`\<`AppModelType`, `DbModelType`\>

Configuration options for the infinite query, including Firestore query reference, query constraints, composite filter, and data converter.

## Returns

`UseInfiniteQueryResult`\<`InfiniteData`\<`AppModelType`[], `unknown`\>\>

Result object containing the infinite data and methods for fetching more pages.
