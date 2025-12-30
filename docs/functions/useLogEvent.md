[react-query-firebase](../globals.md) / useLogEvent

# Function: useLogEvent()

```ts
function useLogEvent(options): object;
```

Defined in: [src/web/analytics/useLogEvent.ts:19](https://github.com/vpishuk/react-query-firebase/blob/8ceecca13a939389e74eafa940348e4f6f597f2f/src/web/analytics/useLogEvent.ts#L19)

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
