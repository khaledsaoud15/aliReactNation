import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="px-24 flexbox w-full h-auto py-8">
      {features.map((f, i) => (
        <div
          className="flexbox justify-center gap-3 w-1/5 h-[15vh] border "
          key={i}
        >
          <img src={f.img} alt="" className="w-auto h-5 object-cover" />
          <h1 className="headers">{f.text}</h1>
        </div>
      ))}
    </section>
  );
};

export default Features;
