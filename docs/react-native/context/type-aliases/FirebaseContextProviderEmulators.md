[react-query-firebase](../../../modules.md) / [react-native/context](../index.md) / FirebaseContextProviderEmulators

# Type Alias: FirebaseContextProviderEmulators

```ts
type FirebaseContextProviderEmulators = object;
```

Defined in: [react-native/context/FirebaseContextProvider.tsx:55](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/context/FirebaseContextProvider.tsx#L55)

## Properties

### auth?

```ts
optional auth: object;
```

Defined in: [react-native/context/FirebaseContextProvider.tsx:63](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/context/FirebaseContextProvider.tsx#L63)

Defines configuration for Firebase Auth emulator. Optional

#### host

```ts
host: string;
```

Host to connect to Firebase Auth Emulator

***

### firestore?

```ts
optional firestore: object;
```

Defined in: [react-native/context/FirebaseContextProvider.tsx:59](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/react-native/context/FirebaseContextProvider.tsx#L59)

Defines configuration for Firebase Firestore emulator. Optional.

#### host

```ts
host: string;
```

Host to connect to Firebase Firestore Emulator

#### port

```ts
port: number;
```

Port to connect to Firebase Firestore Emulator
