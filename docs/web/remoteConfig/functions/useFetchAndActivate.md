[react-query-firebase](../../../modules.md) / [web/remoteConfig](../index.md) / useFetchAndActivate

# Function: useFetchAndActivate()

```ts
function useFetchAndActivate(): object
```

Defined in: [web/remoteConfig/useFetchAndActivate.ts:12](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/remoteConfig/useFetchAndActivate.ts#L12)

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
