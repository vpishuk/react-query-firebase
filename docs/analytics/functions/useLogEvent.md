[react-query-firebase](../../modules.md) / [analytics](../index.md) / useLogEvent

# Function: useLogEvent()

```ts
function useLogEvent(options): object
```

Defined in: [src/analytics/useLogEvent.ts:19](https://github.com/vpishuk/react-query-firebase/blob/1065ddd51f4c3a46c2f6510c1cc51259a3705cc2/src/analytics/useLogEvent.ts#L19)

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
