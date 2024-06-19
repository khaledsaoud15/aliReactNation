import React from "react";
import Categories from "./Categories";
import Slider from "./Slider";

const GroupeHeader = () => {
  return (
    <div className="flexbox gap-10 h-full px-24 py-6">
      <Categories />
      <Slider />
    </div>
  );
};

export default GroupeHeader;
