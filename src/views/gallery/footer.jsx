import "../css/footer.css";
import * as React from "react";

export const Footer = ({
  numberOfImagesToDisplay,
  displayImagesFromIndex,
  onClick
}) => (<footer className="gallery-footer">
  <button className="pure-button pure-u-1 pure-u-sm-1-5 pure-button-primary" disabled={displayImagesFromIndex === 900} onClick={() => onClick({displayImagesFromIndex : Math.min(1024, displayImagesFromIndex + numberOfImagesToDisplay)})}>{`Next ${numberOfImagesToDisplay} images`}</button>
</footer>);