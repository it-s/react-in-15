# ./index.js

######  The bootstrap for our application

This is a simply an entry point into the wonderful world of React. Simple and elegant, like React itself:

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './views/app';

/*
 * MySimleGallery bootstrap
 * script
 */
// define the mount root element:
const APP_ROOT = document.getElementById('root');
// render app
ReactDOM.render(
  React.createElement(App),
  APP_ROOT
);
```
```
const APP_ROOT = document.getElementById('root');
```
Once we have the pointer we can attach our application to the DOM node using React DOM utility [ReactDOM.render](https://reactjs.org/docs/react-dom.html)

All we need to do here, is pass into it the App element (which is created by [React.createElement](https://reactjs.org/docs/react-api.html#createelement)) and the DOM node pointer we already got in the previous step.

