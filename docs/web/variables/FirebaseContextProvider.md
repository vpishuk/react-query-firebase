[react-query-firebase](../../modules.md) / [web](../index.md) / FirebaseContextProvider

# Variable: FirebaseContextProvider

```ts
const FirebaseContextProvider: React.FC<{
  analyticsEnabled: boolean;
  authEnabled: boolean;
  children: ReactNode;
  consentSettings: ConsentSettings;
  emulators: {
     auth: {
        host: string;
       };
     firestore: {
        host: string;
        port: number;
       };
    };
  firestoreEnabled: boolean;
  firestoreSettings: FirestoreSettings;
  options: FirebaseOptions;
  remoteConfigDefaults: {};
  remoteConfigEnabled: boolean;
  remoteConfigSettings: RemoteConfigSettings;
}>;
```

Defined in: [web/context/FirebaseContextProvider.tsx:132](https://github.com/vpishuk/react-query-firebase/blob/09a15a5d938c4bdaa4fd86491bcf8ea41c16371f/web/context/FirebaseContextProvider.tsx#L132)

FirebaseContextProvider component configures and provides Firebase services to its children.
Initializes Firebase app and enables optional Firebase services such as Firestore, Auth, Analytics,
and Remote Config based on the provided configuration and parameters.

## Param

## Returns

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
