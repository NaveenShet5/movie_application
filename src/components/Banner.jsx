//import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[25vh] md:h-[75vh] bg-no-repeat bg-cover bg-center flex items-end relative"
      style={{
        backgroundImage:
          "url(https://streamcoimg-a.akamaihd.net/000/110/1196/1101196-Banner-L2-2a52d07f5a6a96be94ae26c8ab925042.jpeg)",
      }}
    >
      <div className="text-white text-2xl text-center w-full bg-gray-900/60 p-4">
        How To Train Your Dragon
      </div>
    </div>
  );
};

export default Banner;
