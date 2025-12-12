[react-query-firebase](../../../../globals.md) / [Web](../index.md) / FirebaseContextProviderEmulators

# Type Alias: FirebaseContextProviderEmulators

```ts
type FirebaseContextProviderEmulators = object;
```

Defined in: [src/web/context/FirebaseContextProvider.tsx:43](https://github.com/vpishuk/react-query-firebase/blob/ff47b09d796de5dcfb13cebc11b03ede10a6bacf/src/web/context/FirebaseContextProvider.tsx#L43)

## Properties

### auth?

```ts
optional auth: object;
```

Defined in: [src/web/context/FirebaseContextProvider.tsx:51](https://github.com/vpishuk/react-query-firebase/blob/ff47b09d796de5dcfb13cebc11b03ede10a6bacf/src/web/context/FirebaseContextProvider.tsx#L51)

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

Defined in: [src/web/context/FirebaseContextProvider.tsx:47](https://github.com/vpishuk/react-query-firebase/blob/ff47b09d796de5dcfb13cebc11b03ede10a6bacf/src/web/context/FirebaseContextProvider.tsx#L47)

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
