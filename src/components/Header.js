import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-around   bg-black">
        <div>
          <img
            className="  w-40 md:w-60 "
            src="https://www.metri-tech.com/wp-content/uploads/2017/01/spacex-logo.jpg"
            alt="logo"
          />
        </div>
        <div className="flex ">
          <h1 className=" text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block ">
            FALCON 9
          </h1>

          <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block ">
            FALCON HEAVY
          </h1>
          <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
            DRAGON
          </h1>
          <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
            STARSHIP
          </h1>
          <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
            HUMAN SPACEFLIGHT
          </h1>
          <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
            RIDESHARE
          </h1>
          <h1 className="text-xs pr-2 md:pr-4 md:text-base md:font-bold text-white hidden sm:block">
            STARLINK
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;

//text-xs md:pr-4 md:text-base md:font-bold text-white

// import React from "react";

// const Header = () => {
//   return (
//     <div className="bg-black">
//       <div className="container mx-auto py-4 flex flex-col sm:flex-row items-center justify-between">
//         <div className="flex items-center mb-4 sm:mb-0">
//           <img
//             className="w-40 sm:w-60"
//             src="https://www.metri-tech.com/wp-content/uploads/2017/01/spacex-logo.jpg"
//             alt="logo"
//           />
//         </div>
//         <div className="flex flex-wrap text-center sm:text-left">
//           <h1 className="text-base font-bold text-white mb-2 sm:mb-0 sm:mr-4">
//             FALCON 9
//           </h1>
//           <h1 className="text-base font-bold text-white mb-2 sm:mb-0 sm:mr-4">
//             FALCON HEAVY
//           </h1>
//           <h1 className="text-base font-bold text-white mb-2 sm:mb-0 sm:mr-4">
//             DRAGON
//           </h1>
//           <h1 className="text-base font-bold text-white mb-2 sm:mb-0 sm:mr-4">
//             STARSHIP
//           </h1>
//           <h1 className="text-base font-bold text-white mb-2 sm:mb-0 sm:mr-4">
//             HUMAN SPACEFLIGHT
//           </h1>
//           <h1 className="text-base font-bold text-white mb-2 sm:mb-0 sm:mr-4">
//             RIDESHARE
//           </h1>
//           <h1 className="text-base font-bold text-white mb-2 sm:mb-0">
//             STARLINK
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
