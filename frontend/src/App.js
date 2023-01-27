import "./index.css";
import DropdownMobile from "./components/DropdownMobile";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App bg-primary">
      <main>
        {/* MOBILE APP */}
        <div id="app-mobile">
          <DropdownMobile />
          {/* CAROSELLO */}
          <figure className="mx-8 my-6 ">
            {" "}
            <img
              src="https://source.unsplash.com/random/?jewelry"
              alt="jewelry"
              className="img-mask border-accent"
            />{" "}
          </figure>

          {/* <---! BARRA NAVIGAZIONE ---> */}
          <div className=" flex-center mx-5 mb-7">
            {/* freccia sinistra */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            {/* icona categoria */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {/* freccia destra */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>

        {/* TABLET VIEW */}
        <div id="app-tablet">
          <HeroSection />
        </div>
        {/* DESKTOP VIEW */}

        <div id="app-desktop">
          <div className="grid-desktop m-height-full">
            <div className="grid-span-1-2">1</div>
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
      </main>
    </div>
  );
}

export default App;
