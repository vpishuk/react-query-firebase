[react-query-firebase](../../../../globals.md) / [RN](../index.md) / FirebaseContextProvider

# Variable: FirebaseContextProvider

```ts
const FirebaseContextProvider: React.FC<object & object>;
```

Defined in: [src/react-native/context/FirebaseContextProvider.tsx:162](https://github.com/vpishuk/react-query-firebase/blob/ff47b09d796de5dcfb13cebc11b03ede10a6bacf/src/react-native/context/FirebaseContextProvider.tsx#L162)

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
