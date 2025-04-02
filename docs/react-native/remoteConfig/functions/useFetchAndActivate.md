[react-query-firebase](../../../modules.md) / [react-native/remoteConfig](../index.md) / useFetchAndActivate

# Function: useFetchAndActivate()

```ts
function useFetchAndActivate(): object
```

Defined in: [react-native/remoteConfig/useFetchAndActivate.ts:12](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/remoteConfig/useFetchAndActivate.ts#L12)

Custom hook to fetch and activate remote configuration settings.
Initializes remote configuration, fetches, activates it, and tracks the fetch status.

## Returns

`object`

An object containing:
- {Function} fetchAndActivate - Callback function to fetch and activate remote configuration.
- {Boolean} isFetched - Boolean representing whether the fetch-and-activate process completed.

### fetchAndActivate()

```ts
fetchAndActivate: () => Promise<void> = fetchAndActivateCallback;
```

#### Returns

`Promise`\<`void`\>

### isFetched

```ts
isFetched: boolean;
```
