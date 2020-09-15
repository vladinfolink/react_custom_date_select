
Easy to use & customizable HTML5 drop zone written in TypeScript for React.

You don't need TS for installation & you can use the component's default
 props to circumvent editing it. Defaults are provided; will return an object
 containing files & rejected files as arrays;

## Installation

```shell
npm install --save react-custom-dropzone
```
Copy & import the App.css file in the root project of this repo to display the dropzone.

## Importing

```js
import { CustomDropZone } from 'react-custom-dropzone';
```
## Important
      The default prop fileTypesAllowed is []; not passing your own MIME types will result in all selected files being passed to be injected in the files array & an empty rejectedFiles Array.
      Make sure sure you **don’t** include `other props` in the build, otherwise it will throw an error.


## Example & default props:
```js
  {
    renderPics: true,
    allowClick: true,
    displayFiles: true,
    displayRejectedFiles: true,
    fileCountLimit: Infinity,
    rejectedFileCountLimit: Infinity,
    dropText: 'Drop or select files to upload.',
    handleFiles:  (params: any) => {
      console.log(params);
    },
    fileTypesAllowed: [],
    maxFileSize: Infinity 
  }
  }
```

## Usage

```js
import React from "react";
import "./App.css";
import { CustomDropZone } from "react-custom-dropzone-ts";
function App() {
  return (
    <div>
      <CustomDropZone
        renderPics={true}
        //if file type is of type image, its miniature version will be displayed in each file item list
        allowClick={true}
        //allow user interaction by click to select files
        displayFiles={true}
        //prop to display files under the dropzone, an alternative to rendering data yourself.
        displayRejectedFiles={true}
        fileCountLimit={6}
        rejectedFileCountLimit={99}
        // Maximum number of displayed rejected files.
        dropText={"Drop"}
        //Change the drop-zone's default text.
        handleFiles={handleFiles}
        // Handle files component function. Default is window.console.log
        fileTypesAllowed={[
          "text/plain",
          "image/jpeg"
          // ...
          // Include the MIME type of files to be accepted in the files array.
          // Leaving it empty or or as default([]) will prompt the drop-zone to accept MIME types of any kind.
        ]}
        maxFileSize={500000}
          // Maximum accepted file size, in bytes(10**-6 mb). 
          // Note that the actual file(s) include(s) metadata,
          //  aside from the size property on the File object.
          // You may want to leave it as default (Infinity)
      />
    </div>
  );
}

export default App;
```
## Note

Regardless of the number of files being injected into the drop zone, the component will return a spliced arrays of length 
up to the fileCountLimit & rejectedFileCountLimit prop, respectively;

Deleting any file from the dropdown will trigger a re-render but will keep other files & pass them again to your handler.

Only images will be displayed in the rendered list, if the displayFiles has a value of true or is left as default.

**!** At the time of this writing, there are 2 known audit issues in the current version so we recommend running:

```js
  "npm audit fix"
```

## How to mention this package as a dependancy?

Insert a caret range in your package.json file:

```js
  "dependencies": {
    "react-custom-dropzone": "^0.1.0"
  }
```

Make sure sure you **don’t** include `other props` in the build, otherwise it will throw an error.

## Compatibility

This package was built with **React 16.8** but should be compatible with any previous release which includes the React.Fragment.

### License

react-custom-dropzone-ts is [MIT licensed](./LICENSE).
# react_custom_dropzone
# react_custom_date_select
