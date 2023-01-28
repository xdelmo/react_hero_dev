import React from "react";
import ImageHero from "./ImageHero";
import AltaGioielleria from "./svg/AltaGioielleria";
import Gioielleria from "./svg/Gioielleria";
import Orologi from "./svg/Orologi";

function HeroSection() {
  return (
    <div className="grid-main m-height-full">
      <div className="grid-span-1-2 flex-center hero-grid_section">
        <ImageHero />
        <div>
          <Gioielleria />
        </div>
      </div>
      <div className="grid-span-2-3 flex-center border-lateral hero-grid_section">
        <ImageHero />
        <div>
          <Orologi />
        </div>
      </div>
      <div className="grid-span-3-4 flex-center hero-grid_section">
        <ImageHero />
        <div>
          <AltaGioielleria />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
