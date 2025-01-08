[![Release Train](https://github.com/vpishuk/react-query-firebase/actions/workflows/main.yaml/badge.svg?branch=main)](https://github.com/vpishuk/react-query-firebase/actions/workflows/main.yaml)

# react-query-firebase

This module offers a set of hooks to work with [Firebase](https://firebase.google.com/) platorrm.

## Installation

Run the following command to install:

```
npm i react-query-firebase @tanstack/react-query --save
```

## Basic Example

```jsx
import { useQuery, FirebaseContextProvider } from "react-query-firebase";

const firebaseConfig = {};
export const App = () => {
    const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { throwOnError: true } } }));

    return (
        <QueryClientProvider client={queryClient}>
            <FirebaseContextProvider options={firebaseConfig}>
                <ChildComponent />
            </FirebaseContextProvider>
        </QueryClientProvider>
    );
};

export const ChildComponent = () => {
    const { data, isFetching } = useQuery({});

    return <div>{JSON.stringify(data)}</div>;
};
```

## Documentation

1. [All docs](https://vpishuk.github.io/react-query-firebase).

## Contribution guidelines

You are encouraged to contribute to this project as soon as you see any defects or issues.

## Code Editor Configuration

This repository contains configuration for VSCode editor. It doesn't mean that you cannot use a different tool. Feel free to push configurations for your favourite code editor.

## Commands

1. To build : `npm run build`
2. To lint use: `npm run lint`
3. To initialize pre-commit hooks use: `npm run prepare`

## Workflow

Before you get started make sure that there is noone working on an issue you are going to address.

As a first step, clone the repository and run `npm i && npm run prepare` command to install all dependencies and initialize pre-commit hooks.

Create a branch to work on your code changes.

Once you are done with coding, create pull request and get an approval.

Lastly, enjoy your changes.
