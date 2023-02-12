import React from "react";
import { useState } from "react";
import ChevronDown from "./svg/ChevronDown";

function DropdownMobile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div id="dropdown-mobile">
      <div className="flex-center border-bottom">
        <a href="" className=" py-2 uppercase bold dropdown-mobile_link">
          Donna
        </a>
        {/* <button onClick={handleDropdownClick} className="button-dropdown"> */}
        <div
          id="button-dropdown"
          onClick={handleDropdownClick}
          className={`button-dropdown ${isDropdownOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown />
        </div>
        {/* </button> */}
      </div>

      <div
        id="dropdown_items"
        className={` ${isDropdownOpen ? "height-auto" : "height-zero"}`}
      >
        <div className="py-2 flex-center uppercase border-bottom">
          <a href="" className=" dropdown-mobile_link">
            Uomo
          </a>
        </div>
        <div className=" py-2 flex-center uppercase border-bottom">
          <a href="" className=" dropdown-mobile_link">
            Bambino
          </a>
        </div>
      </div>
    </div>
  );
}

export default DropdownMobile;
