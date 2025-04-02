[react-query-firebase](../../modules.md) / [web](../index.md) / FirebaseContextProviderEmulators

# Type Alias: FirebaseContextProviderEmulators

```ts
type FirebaseContextProviderEmulators = object;
```

Defined in: [web/context/FirebaseContextProvider.tsx:36](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/context/FirebaseContextProvider.tsx#L36)

## Properties

### auth?

```ts
optional auth: object;
```

Defined in: [web/context/FirebaseContextProvider.tsx:44](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/context/FirebaseContextProvider.tsx#L44)

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

Defined in: [web/context/FirebaseContextProvider.tsx:40](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/context/FirebaseContextProvider.tsx#L40)

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
