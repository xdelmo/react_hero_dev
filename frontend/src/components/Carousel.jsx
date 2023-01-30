import React from "react";
import Gioielleria from "./svg/Gioielleria";
import LeftArrow from "./svg/LeftArrow";
import RightArrow from "./svg/RightArrow";

function Carousel() {
  return (
    <div id="carousel">
      <div className="carousel_imgs">
        <img
          src="https://source.unsplash.com/random/?jewelry"
          alt="jewelry"
          className="img-mask border-accent carousel_img "
        />
        {/* <img
          src="https://source.unsplash.com/random/?jewelry"
          alt="jewelry"
          className="img-mask border-accent"
        />
        <img
          src="https://source.unsplash.com/random/?jewelry"
          alt="jewelry"
          className="img-mask border-accent"
        /> */}
      </div>

      {/* <---! BARRA NAVIGAZIONE ---> */}
      <div id="navbar-mobile">
        {/* freccia sinistra */}
        <div className="flip svg-mobile">
          <LeftArrow />
        </div>
        {/* icona categoria */}
        <div className="lottie-mobile">
          <Gioielleria />
        </div>
        {/* freccia destra */}
        <div className="svg-mobile">
          <RightArrow />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
