import "./index.css";
// import DropdownMobile from "./components/DropdownMobile";
import HeroSection from "./components/HeroSection";
import NavbarLateral from "./components/NavbarLateral";
import React, { useState, useEffect } from "react";
import Carousel from "./components/Carousel";

function App() {
  // stato per conoscere il tipo di dispositivo
  const [isDesktop, setIsDesktop] = useState(false);
  // stato per controllare la larghezza della finestra
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useeffect con listener sul resize della finestra
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // setta la setWindowWidth ad ogni ascolto del resize
    window.addEventListener("resize", handleWindowResize);
    // if che setta isDesktop per l'operatore ternario e il render del DOM tablet o desktop
    if (windowWidth >= 1366) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="App bg-primary">
      <main>
        {/* MOBILE APP */}
        <div id="app-mobile">
          {/* <DropdownMobile /> */}
          {/* CAROSELLO */}
          <Carousel />
        </div>

        {/* TABLET VIEW */}
        {/* operatore ternario per togliere dal DOM elementi con lo stesso ID per far continuare a funzionare le animazioni*/}
        {!isDesktop ? (
          <div id="app-tablet">
            {/* <DropdownMobile /> */}
            <HeroSection />
          </div>
        ) : (
          <div id="app-desktop">
            <div className="grid-desktop">
              <div className="grid-span-1-2">
                <NavbarLateral />
              </div>
              <div className="grid-span-2-3 border-lateral">
                <HeroSection />
              </div>
              <div className="grid-span-3-4 flex-center overflow-hidden">
                <aside className="bold uppercase transform-vertical font-main">
                  <a href="">Occasioni</a>
                </aside>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
