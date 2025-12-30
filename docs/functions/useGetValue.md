[react-query-firebase](../globals.md) / useGetValue

# Function: useGetValue()

```ts
function useGetValue(key): Value | null;
```

Defined in: [src/web/remoteConfig/useGetValue.ts:11](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/remoteConfig/useGetValue.ts#L11)

Custom hook to retrieve a value associated with a specified key from remote configuration.
Utilizes memoization to optimize performance by recalculating the result only if dependencies change.

## Parameters

### key

`string`

The key for which the corresponding value is to be fetched from the remote configuration.

## Returns

`Value` \| `null`

The value associated with the specified key if available, otherwise null.
