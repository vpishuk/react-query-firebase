[react-query-firebase](../../modules.md) / [context](../index.md) / FirebaseContextProviderEmulators

# Type Alias: FirebaseContextProviderEmulators

```ts
type FirebaseContextProviderEmulators = object;
```

Defined in: [src/context/FirebaseContextProvider.tsx:36](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/context/FirebaseContextProvider.tsx#L36)

## Type declaration

### auth?

```ts
optional auth: object;
```

Defines configuration for Firebase Auth emulator. Optional

#### auth.host

```ts
host: string;
```

Host to connect to Firebase Auth Emulator

### firestore?

```ts
optional firestore: object;
```

Defines configuration for Firebase Firestore emulator. Optional.

#### firestore.host

```ts
host: string;
```

Host to connect to Firebase Firestore Emulator

#### firestore.port

```ts
port: number;
```

Port to connect to Firebase Firestore Emulator
