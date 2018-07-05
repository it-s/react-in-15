import "../css/filter.css";
import * as React from "react";

export const Filters = ({
  displayImagesFromIndex,
  numberOfImagesToDisplay,
  onChange
}) => (<header className="filter-row pure-form">
  <span>Per page:</span>
  &nbsp;&nbsp;
  <select defaultValue={numberOfImagesToDisplay} onChange={(e) => onChange({ numberOfImagesToDisplay: e.currentTarget.value * 1 })}>
    <option value="8">8</option>
    <option value="12">12</option>
    <option value="24">24</option>
    <option value="48">48</option>
  </select>
  &nbsp;&nbsp;
  <button title={`Previous ${numberOfImagesToDisplay}`} className="pure-button" disabled={displayImagesFromIndex === 0} onClick={() => onChange({displayImagesFromIndex : Math.max(0, displayImagesFromIndex - numberOfImagesToDisplay)})}>&lt;</button>
  &nbsp;
  <button title={`Next ${numberOfImagesToDisplay}`} className="pure-button" disabled={displayImagesFromIndex === 1024} onClick={() => onChange({displayImagesFromIndex : Math.min(1024, displayImagesFromIndex + numberOfImagesToDisplay)})}>&gt;</button>
</header>);