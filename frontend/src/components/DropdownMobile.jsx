import React from "react";
import { useState } from "react";

function DropdownMobile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div id="dropdown-mobile">
      <div className="flex-center font-secondary font-bold  text-sm grid-span-1 border-b-[1px] border-solid border-accent gap-5 uppercase ">
        <a href="" className="py-2">
          Donna
        </a>
        <button onClick={handleDropdownClick} className="flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>

      {isDropdownOpen && (
        <div>
          <div className="flex-center bg-main font-secondary font-bold text-sm grid-span-1 border-b-[1px] border-solid border-accent gap-5 uppercase ">
            <a href="" className="py-2">
              Uomo
            </a>
          </div>
          <div className="flex-center  font-secondary font-bold text-sm grid-span-1 border-b-[1px] border-solid border-accent gap-5 uppercase ">
            <a href="" className="py-2">
              Bambino
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMobile;
