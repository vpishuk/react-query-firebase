[react-query-firebase](../../../modules.md) / [react-native/remoteConfig](../index.md) / useGetValue

# Function: useGetValue()

```ts
function useGetValue(key): null | ConfigValue
```

Defined in: [react-native/remoteConfig/useGetValue.ts:11](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/remoteConfig/useGetValue.ts#L11)

Custom hook to retrieve a value associated with a specified key from remote configuration.
Utilizes memoization to optimize performance by recalculating the result only if dependencies change.

## Parameters

### key

`string`

The key for which the corresponding value is to be fetched from the remote configuration.

## Returns

`null` \| `ConfigValue`

The value associated with the specified key if available, otherwise null.
