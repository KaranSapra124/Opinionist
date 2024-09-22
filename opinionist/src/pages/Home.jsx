import React from "react";
import HomeBanner from "../Components/Home/HomeBanner";
import Offers from "../Components/Home/Offers";
import MainOffers from "../Components/Home/MainOffers";
import BestOffer from "../Components/Home/BestOffer";
import Testimonial from "../Components/Home/Testimonial";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <MainOffers />
      <Offers />
      <BestOffer />
      <Testimonial/>
    </>
  );
};

export default Home;
