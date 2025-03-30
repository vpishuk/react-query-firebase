[react-query-firebase](../../../modules.md) / [react-native/firestore](../index.md) / useInfiniteQuery

# Function: useInfiniteQuery()

```ts
function useInfiniteQuery<AppModelType>(options): UseInfiniteQueryResult<InfiniteData<AppModelType[], unknown>>
```

Defined in: [react-native/firestore/useInfiniteQuery.ts:58](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/react-native/firestore/useInfiniteQuery.ts#L58)

Custom hook that creates an infinite query using Firestore, allowing for query constraints, composite filters, and converters.
It fetches data in pages and can load more as required.

## Type Parameters

### AppModelType

`AppModelType` *extends* `DocumentData` = `DocumentData`

## Parameters

### options

`UseInfiniteQueryOptions`\<`AppModelType`\>

Configuration options for the infinite query, including Firestore query reference, query constraints, composite filter, and data converter.

## Returns

`UseInfiniteQueryResult`\<`InfiniteData`\<`AppModelType`[], `unknown`\>\>

Result object containing the infinite data and methods for fetching more pages.
