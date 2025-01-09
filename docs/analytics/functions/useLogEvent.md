[react-query-firebase](../../modules.md) / [analytics](../index.md) / useLogEvent

# Function: useLogEvent()

```ts
function useLogEvent(options): object
```

Defined in: [src/analytics/useLogEvent.ts:19](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/analytics/useLogEvent.ts#L19)

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
