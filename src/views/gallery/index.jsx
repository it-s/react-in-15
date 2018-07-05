import "../css/gallery.css";
import * as React from "react";

import { Filters } from "./filters";
import { Image } from "./image";
import { Footer } from "./footer";

export class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImagesFromIndex: 0,
      numberOfImagesToDisplay: 12,
    };
  }
  get images() {
    const { images } = this.props;
    const {
      displayImagesFromIndex,
      numberOfImagesToDisplay
    } = this.state;
    return images.slice(displayImagesFromIndex, displayImagesFromIndex + numberOfImagesToDisplay);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.displayImagesFromIndex !== this.state.displayImagesFromIndex)
    window.scrollTo(0, 0);
  }
  render() {
    const { images } = this;
    return (<div className="image-grid-container">
      <Filters {...this.state} titalNumberOfImages={this.props.images.length} onChange={state => this.setState(state)} />
      <main className="image-grid pure-g">
        {
          images.map(image => <Image key={image.id} {...image} />)
        }
      </main>
      <Footer {...this.state} onClick={state => this.setState(state)} />
    </div>);
  }
}