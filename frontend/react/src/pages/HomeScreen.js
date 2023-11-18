import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Categories from "../components/Categories";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className="flex">
      <Categories className="" />
      <ImageSlider className=""/>
      </div>
    </div>
  );
}

export default HomeScreen;
