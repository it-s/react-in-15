import * as React from "react";

export const Image = ({
  author,
  author_url,
  filename,
  format,
  height,
  id,
  post_url,
  width
}) => (<figure className="image-grid-item pure-u-1 pure-u-sm-1-2 pure-u-md-1-4 pure-g">
  <a href={post_url}>
    <img className="pure-img" src={`https://picsum.photos/300/200?image=${id}`} />
  </a>
  <figcaption>
    <small><a href={author_url}>{author}</a></small>
  </figcaption>
</figure>);