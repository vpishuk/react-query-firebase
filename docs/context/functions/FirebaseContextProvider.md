[react-query-firebase](../../modules.md) / [context](../index.md) / FirebaseContextProvider

# Function: FirebaseContextProvider()

```ts
function FirebaseContextProvider(props): ReactNode | Promise<ReactNode>
```

Defined in: [src/context/FirebaseContextProvider.tsx:112](https://github.com/vpishuk/react-query-firebase/blob/2814a7f726829eb67b40b71ca1e3d6c86fc8bb8b/src/context/FirebaseContextProvider.tsx#L112)

FirebaseContextProvider component configures and provides Firebase services to its children.
Initializes Firebase app and enables optional Firebase services such as Firestore, Auth, Analytics,
and Remote Config based on the provided configuration and parameters.

## Parameters

### props

#### analyticsEnabled

`boolean`

Flag indicating whether Firebase Analytics should be enabled.

**Default Value**

`true`

#### authEnabled

`boolean`

Flag indicating whether Firebase Auth should be enabled.

#### children

`ReactNode`

#### emulators

\{
  `auth`: \{
     `host`: `string`;
    \};
  `firestore`: \{
     `host`: `string`;
     `port`: `number`;
    \};
 \}

Defines configuration for firebase emulators

#### emulators.auth

\{
  `host`: `string`;
 \}

Defines configuration for Firebase Auth emulator. Optional

#### emulators.auth.host

`string`

Host to connect to Firebase Auth Emulator

#### emulators.firestore

\{
  `host`: `string`;
  `port`: `number`;
 \}

Defines configuration for Firebase Firestore emulator. Optional.

#### emulators.firestore.host

`string`

Host to connect to Firebase Firestore Emulator

#### emulators.firestore.port

`number`

Port to connect to Firebase Firestore Emulator

#### firestoreEnabled

`boolean`

Flag indicating whether Firebase Firestore should be enabled.

**Default Value**

`true`

#### options

`FirebaseOptions`

Configuration options for Firebase initialization. [Learn about the Firebase config object](https://firebase.google.com/docs/web/setup#config-object)

#### remoteConfigDefaults

\{\}

Configuration options for Firebase Remote Config Defaults.

#### remoteConfigEnabled

`boolean`

Flag indicating whether Firebase Remote Config should be enabled.

**Default Value**

`true`

#### remoteConfigSettings

`RemoteConfigSettings`

Configuration options for Firebase Remote Config Settings. [Learn about the Firebase Remote COnfig Settings object](https://firebase.google.com/docs/reference/js/remote-config.remoteconfigsettings)

**Default Value**

`true`

## Returns

`ReactNode` \| `Promise`\<`ReactNode`\>

## Example

```jsx
const firebaseConfig = {};
export const App = () => {
 return (
     <FirebaseContextProvider options={firebaseConfig}>
         <ChildComponent />
     </FirebaseContextProvider>
 );
};
```
