## Creat React App Redux Auth Starter Template

Redux auth starter is a preconfigured [Create React App (CRA)](https://github.com/facebook/create-react-app) template. You can start building your app with Zero configuration.

### Usage

```
yarn create react-app your-project-name --template redux-auth-starter
```
### Or

```
npx create-react-app your-project-name --template redux-auth-starter
```

npx command installs most recent stable version of CRA from npm. --template parameter points to this template, note that cra-template- prefix is omitted.

Next 
```
cd your_project_name
```

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### This CRA template includes
 - React
 - Redux
 - React Router
 - Axios
 - Redux Saga
 - Ant Design
 - SASS
 - Auth Routes
 - Preconfigured store, actions, sagas 

### Advantages
- Mock authentication is configured with [reqres](https://reqres.in/) API.
- Public and Private routes are configured
- Redirect to the private route after successful login, Prevent access to public pages after login and Prevent access to the private pages before login.
- UI components are styled with [Ant Design](https://ant.design/).
- To access different API verbs, axiosClient helper is included.
- Basic Folder structure.
- **Absolute Imports**
- **.env** file included.
- ESLint 

More feature coming on the way...

### Folder Structure
```
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── App.scss
│   ├── App.test.js
│   ├── Config
│   │   ├── axiosClient.js
│   │   └── constants.js
│   ├── components
│   │   ├── Dashboard.js
│   │   ├── LoginPage.js
│   │   └── Users.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── redux
│   │   ├── Authenticate
│   │   │   ├── actions.js
│   │   │   ├── reducer.js
│   │   │   └── saga.js
│   │   ├── rootReducers.js
│   │   ├── rootSaga.js
│   │   └── store.js
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock
```
### Quick Start

After installing the template

1. Update the API Host url in .env file and restart the app

```
REACT_APP_HOST_URL = https://reqres.in/api/
```

2. Write your app components in **components** directory.


3. Write your global scss in **App.scss** file.


4. Write your authentication API's in redux/Authenticate/saga.js file.


5. Include your component reducer,  saga in rootSaga.js and rootReducers.js to add them to redux middleware.


6. Edit the Lint rules in **.eslintrc.json** file.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

-   [Nilanth](https://github.com/nilanth)
-   [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
