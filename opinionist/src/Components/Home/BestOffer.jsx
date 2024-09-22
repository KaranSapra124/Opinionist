import React from "react";

const BestOffer = () => {
  return (
    <div className=" bg-white flex justify-evenly items-center">
      {/* Image */}

      {/* Overlay Text */}
      <div className="relative z-10  bg-opacity-50 text-white p-4 rounded-md text-center flex flex-col items-center">
        <h2 className="text-3xl max-[600px]:text-xl font-bold text-black">
          Best Offer
        </h2>
        <p className="text-sm max-[600px]:text-xs font-semibold text-green-800">
          --Have Our Offer!
        </p>
        <h2 className="text-green-400 font-semibold flex max-[600px]:text-sm">
          $29.00 <span className="ml-2">with discount</span>
        </h2>
        <p className="text-justify text-black max-[600px]:text-sm">
          Have our delicious meal <br /> & you won't regret it!
        </p>
        <button className="bg-green-500 max-[600px]:text-sm rounded-tr-full rounded-bl-full hover:rounded-tr-none hover:rounded-bl-none  transition-all hover:rounded-tl-full hover:rounded-br-full text-white w-full rounded p-1 mt-2">
          Know More
        </button>
      </div>
      <img
        className=" w-[40rem] h-[20rem] max-[600px]:w-[10rem] max-[600px]:h-[10rem]"
        src="BestOffer.png"
        alt="Best Offer"
      />
    </div>
  );
};

export default BestOffer;
