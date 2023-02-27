import React, { useEffect, useState } from "react";
import Gioielleria from "./svg/Gioielleria";
import LeftArrow from "./svg/LeftArrow";
import RightArrow from "./svg/RightArrow";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function Carousel() {
  const [pageLoaded, setPageLoaded] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setPageLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  });

  if (pageLoaded) {
    const swiperEl = document.querySelector("swiper-container");
    const buttonNextSlide = document.getElementById("button-nextslide");
    const buttonPrevSlide = document.getElementById("button-prevslide");

    buttonNextSlide.addEventListener("click", () => {
      swiperEl.swiper.slideNext();
    });
    buttonPrevSlide.addEventListener("click", () => {
      swiperEl.swiper.slidePrev();
    });
  }

  return (
    <div id="carousel">
      <swiper-container
        slides-per-view="1"
        speed="500"
        // css-mode="true"
        // allowSlidePrev="true"
        // allowSlideNext="true"
        // rewind="true"
        // scrollbar="true"
        // navigation="true"
        loop="true"
        init="true"
        longSwipes="false"
      >
        {/* <---! BARRA NAVIGAZIONE ---> */}
        <swiper-slide>
          {" "}
          <div className="carousel_imgs">
            <img
              src="https://source.unsplash.com/random/?earings"
              alt="jewelry"
              className="img-mask border-accent carousel_img "
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <div className="carousel_imgs">
            <img
              src="https://source.unsplash.com/random/?bracelet"
              alt="jewelry"
              className="img-mask border-accent carousel_img "
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <div className="carousel_imgs">
            <img
              src="https://source.unsplash.com/random/?watches"
              alt="jewelry"
              className="img-mask border-accent carousel_img "
            />
          </div>
        </swiper-slide>
      </swiper-container>

      {/* <---! BARRA NAVIGAZIONE ---> */}
      <div id="navbar-carousel">
        {/* freccia sinistra */}
        <button id="button-prevslide">
          <div className="flip svg-mobile">
            <LeftArrow />
          </div>
        </button>
        {/* icona categoria */}
        <div className="lottie-mobile">
          <Gioielleria />
        </div>
        {/* freccia destra */}
        <button id="button-nextslide">
          <div className="svg-mobile">
            <RightArrow />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
