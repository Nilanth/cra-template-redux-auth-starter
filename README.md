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
cd {PROJECT NAME}
yarn start
```

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

More feature coming on the way...

