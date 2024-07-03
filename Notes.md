# Curso React.js desde cero

## Setup

- `yarn create vite .`
- `yarn`
- `yarn dev`

## Installations

- To handle routes, redirects, etc.

  - `yarn add react-router-dom`

- To use a pollify for the IntersectionObserver API:

  - `yarn add intersection-observer`

- Is for only make once request/action:

  - `yarn add just-debounce-it`

- For the eslint, install:

  - `yarn add --dev eslint-config-react-app eslint`

- To handle forms:

  - `yarn add formik`
  - `yarn add react-hook-form`

- To handle CSS:

  - `yarn add @emotion/react @emotion/styled`

- useReducer

- And create a file called: .eslintrc.json in the root directory with the following:

```
{
    "extends": "react-app"
}
```

- React developers tools
- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es

- To set the meta tags:
  - `yarn add react-helmet`
  - `yarn add --dev @types/react-helmet`

## Info

- For the intersection-observer dynamically import, we need to restart the server

## Testing

- Install jest and babel-jest

  - `yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react`

- Install testing library

  - `yarn add --dev @testing-library/react`

- Install jest-environment-jsdom

  - `yarn add --dev jest-environment-jsdom`

- Install @types/jest, to get the autocomplete

  - `yarn add --dev @types/jest`

- Install @testing-library/jest-dom to work more directly with DOM nodes(improve assertions)

  - `yarn add --dev @testing-library/jest-dom`

- Setup babel.config.cjs:

```
module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
    ],
};
```

- Setup jest.config.js:

```
module.exports = {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
        "./jest.setup.js"
    ]
};
```

or

```
module.exports = {
    "testEnvironment": "jest-environment-jsdom",
    "setupFilesAfterEnv": [
        "./jest.setup.js"
    ]
};
```

- Setup the jest.setup.js file:

```
import '@testing-library/jest-dom';
```

- To tell VSCode to suggest jest methods in js files add a jsconfig.json file in the test directory:

```
{
    "typeAcquisition": {
        "include": [
            "jest"
        ]
    }
}
```

- In package.json, "scripts", add:

```
"test": "jest --watchAll"
```

- For fetch functionality, you need to add:

```
import 'whatwg-fetch';
```

In jest.setup.js and install 'whatwg-fetch';

- `yarn add --dev whatwg-fetch`

## Deploy

- Vercel:

  - `npm install --location=global vercel`
  - `vercel`

- For production:
  - `vercel --prod`
