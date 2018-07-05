import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './views/app';

/*
 * MyCarShop bootstrap
 * script
 */
// define the mount root element:
const APP_ROOT = document.getElementById('root');
// render app
ReactDOM.render(
  React.createElement(App),
  APP_ROOT
);