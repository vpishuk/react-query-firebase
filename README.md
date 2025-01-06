[![Release Train](https://github.com/vpishuk/react-imagekit-hooks/actions/workflows/main.yaml/badge.svg?branch=main)](https://github.com/vpishuk/react-imagekit-hooks/actions/workflows/main.yaml)

# react-imagekit-hooks

This module offers a set of hooks to work with [ImageKit](https://imagekit.io/) platorrm.
It uses [imagekit-javascript](https://www.npmjs.com/package/imagekit-javascript) module under the hood. Make sure to read documentation for it.

## Installation

Run the following command to install timer in your repository:

```
npm i react-imagekit-hooks
```

## Usage

1. Wrap your application by IKContextProvider

```
<IKContextProvider options={{
    publickKey: '<YOUR_PUBLIC_KEY>',
    urlEndpoint: 'URL_ENDPOINT',
    authenticator: async () => ({
        token: '<GENERATED_TOKEN>',
        expire: '...',
        signature: '...'
    })
}}>
    <App />
</IKContextProvider>
```

2. Use one of the hooks: `useIKImage` or `useIKUpload`

## useIKImageSrc

Use this hook to build URL for an image available through ImageKit platform.
This hook can generate both a URL for a preview and for an original image.

### Options

1. imageOptions - same options as you send to `imagekit.url` method.

### Example

```
const image = useIKImageSrc({
    imageOptions: {
        path: "/my-image",
        transformation: [
            {
                height: "300",
                width: "250"
            }
        ]
    }
});

return <img src={image.src} />
```

## useIKUpload

Use this hook to build an instance of image uploader that will upload image to ImageKit platform.

### Options

1. options - see [here](https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload#request-structure-multipart-form-data)
2. onStart - a callback function that is called right after upload was started and before authentication is complete
3. onProgress - a callback function that is called whenever we have a progress in uploading a file
4. onSuccess - a callback function that is called when upload completes successfully
5. onError - a callback function that is called when upload fails
6. onAbort - a callback function that is called after upload was aborted

### Returns

1. upload - a method to initiate background upload
2. uploadSync - a method to initiate upload that returns Promise
3. abort - a method to abort uploading process
4. progress - a property that holds current progress

### Example

```
const ikUpload = useIKUpload({
        options: {
            folder: `folder`,
            fileName,
            useUniqueFileName: true
        }
    });

const onSubmitCallback = useCallback(async (values) => {
    if (values.image instanceof File) {
        const result = await ikUpload.uploadAsync(values.image);
    }
}, []);
```

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
