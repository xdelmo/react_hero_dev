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
        <a href="" className="uppercase bold dropdown-mobile_link">
          Donna
        </a>
        {/* <button onClick={handleDropdownClick} className="button-dropdown"> */}
        <div onClick={handleDropdownClick} className="button-dropdown">
          <ChevronDown />
        </div>
        {/* </button> */}
      </div>

      {isDropdownOpen && (
        <>
          <div className="flex-center uppercase border-bottom">
            <a href="" className="py-2 dropdown-mobile_link">
              Uomo
            </a>
          </div>
          <div className="flex-center uppercase border-bottom">
            <a href="" className="py-2 dropdown-mobile_link">
              Bambino
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default DropdownMobile;
