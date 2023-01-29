import React from "react";

function ImageHero({ imgID }) {
  return (
    <div id={imgID} className="image-hero img-padding">
      <img
        src="https://source.unsplash.com/random/?jewelry"
        alt="jewelry"
        className="img-mask"
      />
    </div>
  );
}

export default ImageHero;
