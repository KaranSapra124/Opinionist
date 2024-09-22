import React from "react";
import { Carousel } from "antd";

const Testimonial = () => {
  const imgArr = [
    "Test1.jpg",
    "Test2.jpg",
    "Test3.jpg",
    "Test4.jpg",
    "Test5.jpg",
  ];

  return (
    // <div className="w-full max-w-4xl mx-auto h-[20rem] overflow-hidden ">
    // <div key={index} className="flex justify-center items-center">
    <>
      <h1 className="text-center font-bold text-[2rem] max-[600px]:text-[1.5rem]">
        What Are Customers Wants To Say About Us?
      </h1>
      <Carousel
        adaptiveHeight
        autoplay
        autoplaySpeed={1500}
        arrows
        className="m-5 shadow-lg"
      >
        {imgArr?.map((elem, index) => (
          <img
            className="w-52 h-80 object-fill rounded-lg shadow-lg"
            src={elem}
            alt={`Testimonial ${index + 1}`}
          />
        ))}
      </Carousel>
    </>
    // {/* </div> */}
    // </div>
  );
};

export default Testimonial;
