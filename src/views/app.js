import "./css/app.css";
import * as React from "react";
import { Client, Config } from "../utils";

import { Container, ApplicationState } from "./loader";
import {Gallery} from "./gallery";

/*
 * Connect app to the store
 * and pass int othe loader
 * wrapper
 */
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ApplicationState.INIT,
      images: new Array(8)
    };
  }
  componentDidCatch(err) {
    this.setState({ state: ApplicationState.ERROR });
  }
  componentDidMount() {
    this.setState({ state: ApplicationState.LOADING });
    Client.get(Config.urls.list)
      .then(response => this.setState({ images: response, state: ApplicationState.READY }))
      .catch(err => this.setState({ state: ApplicationState.ERROR }))
  }
  render() {
    const {state, images} = this.state;
    return <Container state={state}>
      <Gallery images={images} />
    </Container>;
  }
}
