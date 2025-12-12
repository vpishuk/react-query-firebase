[react-query-firebase](../../../../globals.md) / [RN](../index.md) / FirebaseContextProviderEmulators

# Type Alias: FirebaseContextProviderEmulators

```ts
type FirebaseContextProviderEmulators = object;
```

Defined in: [src/react-native/context/FirebaseContextProvider.tsx:60](https://github.com/vpishuk/react-query-firebase/blob/ff47b09d796de5dcfb13cebc11b03ede10a6bacf/src/react-native/context/FirebaseContextProvider.tsx#L60)

## Properties

### auth?

```ts
optional auth: object;
```

Defined in: [src/react-native/context/FirebaseContextProvider.tsx:68](https://github.com/vpishuk/react-query-firebase/blob/ff47b09d796de5dcfb13cebc11b03ede10a6bacf/src/react-native/context/FirebaseContextProvider.tsx#L68)

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

Defined in: [src/react-native/context/FirebaseContextProvider.tsx:64](https://github.com/vpishuk/react-query-firebase/blob/ff47b09d796de5dcfb13cebc11b03ede10a6bacf/src/react-native/context/FirebaseContextProvider.tsx#L64)

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
