[react-query-firebase](../../modules.md) / [web](../index.md) / FirebaseContextProviderProps

# Type Alias: FirebaseContextProviderProps

```ts
type FirebaseContextProviderProps = PropsWithChildren & object;
```

Defined in: [web/context/FirebaseContextProvider.tsx:50](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/web/context/FirebaseContextProvider.tsx#L50)

## Type declaration

### analyticsEnabled?

```ts
optional analyticsEnabled: boolean;
```

Flag indicating whether Firebase Analytics should be enabled.

#### Default Value

`true`

### authEnabled?

```ts
optional authEnabled: boolean;
```

Flag indicating whether Firebase Auth should be enabled.

### consentSettings?

```ts
optional consentSettings: ConsentSettings;
```

Default user consent settings. Make sure to either use a consent platform or install custom consent form for a certain regions.

#### Default Value

```ts
{
     *                  ad_personalization: "denied",
     *                  ad_storage: "denied",
     *                  ad_user_data: "denied",
     *                  analytics_storage: "denied",
     *                  functionality_storage: "denied",
     *                  personalization_storage: "denied",
     *                  security_storage: "denied"
     *              }
```

### emulators?

```ts
optional emulators: object;
```

Defines configuration for firebase emulators

#### emulators.auth?

```ts
optional auth: object;
```

Defines configuration for Firebase Auth emulator. Optional

#### emulators.auth.host

```ts
host: string;
```

Host to connect to Firebase Auth Emulator

#### emulators.firestore?

```ts
optional firestore: object;
```

Defines configuration for Firebase Firestore emulator. Optional.

#### emulators.firestore.host

```ts
host: string;
```

Host to connect to Firebase Firestore Emulator

#### emulators.firestore.port

```ts
port: number;
```

Port to connect to Firebase Firestore Emulator

### firestoreEnabled?

```ts
optional firestoreEnabled: boolean;
```

Flag indicating whether Firebase Firestore should be enabled.

#### Default Value

`true`

### firestoreSettings?

```ts
optional firestoreSettings: FirestoreSettings;
```

Specifies custom configurations for your Cloud Firestore instance.
You must set these before invoking any other methods.
[https://firebase.google.com/docs/reference/js/firestore\_.firestoresettings](https://firebase.google.com/docs/reference/js/firestore_.firestoresettings)

#### Default Value

```ts
{}
```

### options

```ts
options: FirebaseOptions;
```

Configuration options for Firebase initialization. [Learn about the Firebase config object](https://firebase.google.com/docs/web/setup#config-object)

### remoteConfigDefaults?

```ts
optional remoteConfigDefaults: object;
```

Configuration options for Firebase Remote Config Defaults.

#### Index Signature

```ts
[key: string]: string | number | boolean
```

### remoteConfigEnabled?

```ts
optional remoteConfigEnabled: boolean;
```

Flag indicating whether Firebase Remote Config should be enabled.

#### Default Value

`true`

### remoteConfigSettings?

```ts
optional remoteConfigSettings: RemoteConfigSettings;
```

Configuration options for Firebase Remote Config Settings. [Learn about the Firebase Remote COnfig Settings object](https://firebase.google.com/docs/reference/js/remote-config.remoteconfigsettings)

#### Default Value

`true`
