import React from "react";
import MainPageImg from "./MainPageImg";

const Header = () => {
  return (
    <>
      <header data-test-id="header1">
        <div className="flex items-center justify-around bg-black ">
          <div>
            <a href="/">
              {" "}
              <img
                className="  w-40 md:w-60 "
                src="https://www.metri-tech.com/wp-content/uploads/2017/01/spacex-logo.jpg"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex ">
            <a href="https://www.spacex.com/vehicles/falcon-9/" target="_blank">
              {" "}
              <h1 className=" text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block ">
                FALCON 9
              </h1>
            </a>

            <a
              href="https://www.spacex.com/vehicles/falcon-heavy/"
              target="_blank"
            >
              <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block ">
                FALCON HEAVY
              </h1>
            </a>
            <a href="https://www.spacex.com/vehicles/dragon/" target="_blank">
              <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
                DRAGON
              </h1>
            </a>

            <a href="https://www.spacex.com/vehicles/starship/" target="_blank">
              <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
                STARSHIP
              </h1>
            </a>

            <a href="https://www.spacex.com/humanspaceflight/" target="_blank">
              <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
                HUMAN SPACEFLIGHT
              </h1>
            </a>
            <a href="https://www.spacex.com/rideshare/" target="_blank">
              <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
                RIDESHARE
              </h1>
            </a>

            <a href="https://www.starlink.com/" target="_blank">
              <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
                STARLINK
              </h1>
            </a>
          </div>
        </div>
      </header>
      <div></div>
    </>
  );
};

export default Header;
