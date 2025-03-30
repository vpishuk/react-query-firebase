[react-query-firebase](../../../modules.md) / [web/analytics](../index.md) / useLogEvent

# Function: useLogEvent()

```ts
function useLogEvent(options): object
```

Defined in: [web/analytics/useLogEvent.ts:19](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/analytics/useLogEvent.ts#L19)

Custom hook to create a log event function that logs an analytics event with specified parameters.

## Parameters

### options

`UseLogEventOptions`

The options for the log event.

## Returns

`object`

An object containing a `logEvent` function that, when called, logs the event.

### logEvent()

```ts
logEvent: () => void = logEventCallback;
```

#### Returns

`void`
