import React from "react";
import ImageHero from "./ImageHero";
import AltaGioielleria from "./svg/AltaGioielleria";
import Gioielleria from "./svg/Gioielleria";
import Orologi from "./svg/Orologi";
import RightArrow from "./svg/RightArrow";

function HeroSection() {
  function handleMouseEnter() {
    const heroSection = document.getElementById("primo");

    heroSection.style.setProperty("--opacity", "0.61");
    heroSection.style.setProperty("--background", "var(--clr-accent)");

    const sectionName = document.getElementById("1");
    sectionName.style.setProperty("display", "block");
    // sectionName.style.setProperty("right", "0");
  }

  function handleMouseLeave() {
    const heroSection = document.getElementById("primo");

    heroSection.style.setProperty("--opacity", "0");
    heroSection.style.setProperty("--background", "none");

    const sectionName = document.getElementById("1");
    sectionName.style.setProperty("display", "none");
    // sectionName.style.setProperty("right", "200%");
  }

  return (
    <div className="grid-main">
      {/* Prima sezione */}
      <div className="grid-span-1-2 flex-center hero-grid_section">
        <ImageHero />
        <div
          className="svg-section flex-center"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Gioielleria />
          <div id="1" className="flex-center hero-grid_section_name">
            <a href="" className="uppercase flex-center">
              Gioielleria
              <RightArrow />
            </a>
          </div>
        </div>
      </div>

      <div className="grid-span-2-3 flex-center border-lateral hero-grid_section">
        <ImageHero />
        <div className="svg-section">
          <Orologi />
        </div>
      </div>
      <div className="grid-span-3-4 flex-center hero-grid_section">
        <ImageHero />
        <div className="svg-section">
          <AltaGioielleria />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
