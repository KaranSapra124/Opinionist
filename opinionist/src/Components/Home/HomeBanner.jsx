import React from "react";

const HomeBanner = () => {
  return (
    <>
      <div className="relative">
        <img
          className="h-[35rem] max-[500px]:h-[10rem] object-cover w-full"
          src="HomeBanner.jpg"
          alt="Home Banner"
        />
        <h2 className="absolute inset-0 flex items-center justify-center font-bold bg-black bg-opacity-25 w-fit h-fit m-auto p-1 rounded text-white text-[3rem] max-[500px]:text-[1.5rem]">
          Have What You Want!
        </h2>
      </div>
    </>
  );
};

export default HomeBanner;
