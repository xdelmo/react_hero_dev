import React from "react";
import ImageHero from "./ImageHero";

function HeroSection() {
  return (
    <div className="grid-main m-height-full">
      <div className="grid-span-1-2 flex-center">
        <ImageHero />
      </div>
      <div className="grid-span-2-3 flex-center border-lateral">
        <ImageHero />
      </div>
      <div className="grid-span-3-4 flex-center">
        <ImageHero />
      </div>
    </div>
  );
}

export default HeroSection;
