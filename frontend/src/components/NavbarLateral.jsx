import React from "react";

function NavbarLateral() {
  return (
    <div className="h-full">
      {/* <!-- Navigation --> */}
      <div className="navbar-lateral bold uppercase font-secondary">
        <div className="navbar-lateral_section navbar-link">
          <a href="" className="vertical-navbar-text">
            <span>Bambino</span>
          </a>
        </div>
        <div className="navbar-lateral_section navbar-link">
          <a href="" className="vertical-navbar-text">
            <span>Uomo</span>
          </a>
        </div>
        <div className="navbar-lateral_section">
          <a href="" className="vertical-navbar-text">
            <span>Donna</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarLateral;
