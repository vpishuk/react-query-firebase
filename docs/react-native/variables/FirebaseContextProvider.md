[react-query-firebase](../../modules.md) / [react-native](../index.md) / FirebaseContextProvider

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
  firestoreSettings: {
     cacheSizeBytes: number;
     experimentalAutoDetectLongPolling: boolean;
     experimentalForceLongPolling: boolean;
     experimentalLongPollingOptions: {
        timeoutSeconds: number;
       };
     host: string;
     ignoreUndefinedProperties: boolean;
     localCache: {
        kind: "memory" | "persistent";
       };
     ssl: boolean;
    };
  options: FirebaseAppOptions;
  remoteConfigDefaults: {};
  remoteConfigEnabled: boolean;
  remoteConfigSettings: ConfigSettings;
}>;
```

Defined in: [react-native/context/FirebaseContextProvider.tsx:155](https://github.com/vpishuk/react-query-firebase/blob/47ed1ecd8b83d68dd4237e8eb73f6aa6dea2c1fa/react-native/context/FirebaseContextProvider.tsx#L155)

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
