import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { products } from "../constants";

import "swiper/css";
import "swiper/css/navigation";

const SeeProducts = () => {
  return (
    <Swiper
      spaceBetween={30}
      modules={[Navigation, Autoplay]}
      slidesPerView={3}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      className="h-[30vh] w-[86%] flexbox my-8"
    >
      {products.map((p, i) => (
        <SwiperSlide className="relative flexbox w-full  overflow-hidden rounded-md group">
          <img
            src={p.img}
            alt=""
            className="absolute w-full h-full group-hover:scale-110 transition-all"
          />
          <div className="flex flex-col gap-4 absolute left-12 w-2/4  z-30 ">
            <h1 className="font-bold text-xl text-white">{p.text}</h1>
            <button className="w-auto px-3 py-3 rounded-full border-2 border-white font-bold text-white">
              See Products
            </button>
          </div>

          <div
            className={`w-full absolute top-0 z-10 left-0 h-0 group-hover:h-full bg-gradient-to-r from-${p.gradient} to-transparent `}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SeeProducts;
