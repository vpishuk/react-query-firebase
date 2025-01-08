[react-query-firebase](../../modules.md) / [remoteConfig](../index.md) / useGetValue

# Function: useGetValue()

```ts
function useGetValue(key): null | Value
```

Defined in: [src/remoteConfig/useGetValue.ts:11](https://github.com/vpishuk/react-query-firebase/blob/7fbf9b6c8d5aecd24bcbf362edabf19ee5b1c72c/src/remoteConfig/useGetValue.ts#L11)

Custom hook to retrieve a value associated with a specified key from remote configuration.
Utilizes memoization to optimize performance by recalculating the result only if dependencies change.

## Parameters

### key

`string`

The key for which the corresponding value is to be fetched from the remote configuration.

## Returns

`null` \| `Value`

The value associated with the specified key if available, otherwise null.
