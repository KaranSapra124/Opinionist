import React from "react";

const MainOffers = () => {
  const imgArr = ["Offer_1.avif", "Offer_2.avif", "Offer_3.avif"];
  return (
    <div className="flex items-center justify-center p-2 ">
      <img
        src={imgArr[0]}
        className="border h-[25rem] w-6/12 max-[600px]:w-[12rem] max-[600px]:h-[12rem]   shadow-lg p-2 rounded"
        alt=""
        srcset=""
      />
      <div>
        {imgArr.splice(1, 3).map((elem) => {
          return (
            <img
              className="m-4 h-52 max-[600px]:h-[10rem] w-[30rem] max-[600px]:w-[10rem] max-[600px]:m-2 rounded border shadow-lg p-2"
              src={elem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainOffers;
