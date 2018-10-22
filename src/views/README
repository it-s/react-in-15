# /views/

######  The heart and soul of our APP.

This directory contains all the view elements and logic of our simple gallery.

The main point of interest here is app.js file, where all of our start-up app logic lives.

## ./app.js

**(Statefull component)** This view is where it all begins, so let's spend a bit of time understanding exactly how it's all supposed to work.

We begin with importing everything our widget requires for operation:

```
import "./css/app.css";
import * as React from "react";
import { Client, Config } from "../utils";

import { Container, ApplicationState } from "./loader";
import {Gallery} from "./gallery";
```
The **React** itself and our useful utilities (*you may read more about those inside /utils directory*).

Then we import the views:

* `Container`

* `ApplicationState`

These are utility views that will help us manage our application lifecycle (you may read more about these inside ./views/loader directory)

And finally the `Gallery` component itself.

Then we create our main Application class...

```
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ApplicationState.INIT,
      images: new Array(8)
    };
  }
```
I would strongly encourage you to read the details of how the React component state works directly from the [official documentation](https://reactjs.org/docs/state-and-lifecycle.html). But in short - any React **statefull component** has a state (a set of variables changing over time). Any changes to component state will result in React re-building the view and updating the view values.

In this case we need two values, that will drive our application:

* `state`

* `images`

The state contains the current status of our application, and can take the following values:

* NIT: 0

* LOADING: 1

* READY: 2,

* ERROR: 3

We will us this sate when constructing our rendered view below.

For now we just set the sate to it's default values: `state: ApplicationState.INIT` and images: `new Array(8)`

```
  componentDidCatch(err) {
    this.setState({ state: ApplicationState.ERROR });
  }
```
```
  componentDidMount() {
    this.setState({ state: ApplicationState.LOADING });
    Client.get(Config.urls.list)
      .then(response => this.setState({ images: response, state: ApplicationState.READY }))
      .catch(err => this.setState({ state: ApplicationState.ERROR }))
  }
```
* componentDidMount()

* shouldComponentUpdate()

* componentDidUpdate()

* render()

* componentWillUnmount()

* componentDidCatch()

Each of those governs a specific area of our component lifecycle - from the point where it first appears on page, and to the moment where it's removed.

As can be inferred from the name `componentDidMount` is called when your component first appears on page. It's important to remember that it's ever called only once through your component's existence.

Here we get a chance to set the actual application state and do any kind of preparatory work.

And the first thing we will do is set the application state to LOADING: `this.setState({ state: ApplicationState.LOADING });` This will tell our app that it should display a loader on page.

Then we send a `GET` request to [unsplash](https://unsplash.com) to fetch those images, we wanted to display: `Client.get(Config.urls.list)`

This is an asynchronous call. Meaning that it will complete some time n the future, but our component will not wait for it, and continue doing what it was doing.

To handle this scenario we now attach two listeners to our `Client`: `then`, and `catch`.

`then` listener will be triggered when our call is complete successfully, and at that point we will update out application state and status `this.setState({ images: response, state: ApplicationState.READY })`

`catch` might be triggered in case the call fails (for example if there are any networking issues along the way); in this case the state will be set to `this.setState({ state: ApplicationState.ERROR })` and the error message will be shown on screen.

```
  render() {
    const {state, images} = this.state;
    return <Container state={state}>
      <Gallery images={images} />
    </Container>;
  }
```
