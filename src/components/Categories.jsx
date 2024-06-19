import React from "react";
import { cats } from "../constants";

const Categories = () => {
  return (
    <section className="w-1/4 h-full border flex flex-col ">
      {cats.map((c, i) => (
        <div
          className="flexbox gap-4 px-4 py-3 border-b hover:bg-gray-200 transition-all cursor-pointer"
          key={i}
        >
          <img src={c.img} alt="" className="w-5 h-5 " />
          <h1 className="headers">{c.text}</h1>
        </div>
      ))}
    </section>
  );
};

export default Categories;
