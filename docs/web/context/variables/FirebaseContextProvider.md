[react-query-firebase](../../../modules.md) / [web/context](../index.md) / FirebaseContextProvider

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

Defined in: [web/context/FirebaseContextProvider.tsx:132](https://github.com/vpishuk/react-query-firebase/blob/43c0734068a570cd646254bb366ccd8007f7dfed/web/context/FirebaseContextProvider.tsx#L132)

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
