import React from "react";
import ImageHero from "./ImageHero";
import AltaGioielleria from "./svg/AltaGioielleria";
import Gioielleria from "./svg/Gioielleria";
import Orologi from "./svg/Orologi";
import RightArrow from "./svg/RightArrow";

function HeroSection() {
  function handleMouseEnter(imgID, linkID) {
    const heroSection = document.getElementById(imgID);

    heroSection.style.setProperty("--opacity", "0.61");
    heroSection.style.setProperty("--background", "var(--clr-accent)");

    const sectionName = document.getElementById(linkID);
    sectionName.style.setProperty("--opacity-svg", "1");
    // sectionName.style.setProperty("right", "0");
  }

  function handleMouseLeave(imgID, linkID) {
    const heroSection = document.getElementById(imgID);

    heroSection.style.setProperty("--opacity", "0");
    heroSection.style.setProperty("--background", "none");

    const sectionName = document.getElementById(linkID);
    sectionName.style.setProperty("--opacity-svg", "0");
    // sectionName.style.setProperty("right", "200%");
  }

  const imgID = ["imgGioielleria", "imgOrologi", "imgAltaGioielleria"];
  const linkID = ["linkGioielleria", "linkOrologi", "linkAltaGioielleria"];

  return (
    <div className="grid-main">
      {/* Prima sezione */}
      <div className="grid-span-1-2 flex-center hero-grid_section">
        <ImageHero imgID={imgID[0]} />
        <div
          className="svg-section flex-center"
          onMouseEnter={() => handleMouseEnter(imgID[0], linkID[0])}
          onMouseLeave={() => handleMouseLeave(imgID[0], linkID[0])}
        >
          <Gioielleria />
          <div id={linkID[0]} className="flex-center hero-grid_section_name">
            <a href="" className="uppercase flex-center">
              Gioielleria
              <RightArrow />
            </a>
          </div>
        </div>
      </div>

      <div className="grid-span-2-3 flex-center border-lateral hero-grid_section">
        <ImageHero imgID={imgID[1]} />
        <div
          className="svg-section flex-center "
          onMouseEnter={() => handleMouseEnter(imgID[1], linkID[1])}
          onMouseLeave={() => handleMouseLeave(imgID[1], linkID[1])}
        >
          <Orologi />
          <div id={linkID[1]} className="flex-center hero-grid_section_name">
            <a href="" className="uppercase flex-center">
              Orologi
              <RightArrow />
            </a>
          </div>
        </div>
      </div>
      <div className="grid-span-3-4 flex-center hero-grid_section">
        <ImageHero imgID={imgID[2]} />
        <div
          className="svg-section flex-center"
          onMouseEnter={() => handleMouseEnter(imgID[2], linkID[2])}
          onMouseLeave={() => handleMouseLeave(imgID[2], linkID[2])}
        >
          <AltaGioielleria />
          <div id={linkID[2]} className="flex-center hero-grid_section_name">
            <a href="" className="uppercase flex-center text-center">
              Alta Gioielleria
              <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
