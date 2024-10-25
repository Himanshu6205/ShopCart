import React from "react";
import Banner from "./banner";
import HomeCategory from "./HomeCategory";
import CategoryShoeCase from "./CategoryShoeCase";
import Register from "./Register";
import Location from "./Location";
import AboutUs from "./AboutUs";
import Sponsor from "./Sponsor";

const home = () => {
  return (
    <div>
      <div>
        <Banner />
        <HomeCategory />
        <CategoryShoeCase />
        <Register />
        <Location />
        <AboutUs />
        <Sponsor />
      </div>
    </div>
  );
};

export default home;
