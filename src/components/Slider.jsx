import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import arrow from "../assets/icons/arrowdownWhite.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const Slider = () => {
  const [active, setActive] = useState(false);
  useGSAP(() => {
    gsap.to("#arrow", {
      x: active ? 0 : "28px",
      opacity: active ? 1 : 0,
      color: "#fff",
      ease: "power1",
    });
    gsap.to("#span", {
      x: active ? 0 : "12px",

      ease: "power1",
    });
  }, [active]);

  return (
    <Swiper
      spaceBetween={0}
      modules={[Navigation, Autoplay, Pagination]}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-3/4 h-[75vh]"
    >
      {slides.map((s, i) => (
        <SwiperSlide className="relative" key={i}>
          <img
            src={s.img}
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div className="flex flex-col gap-4 w-2/5 h-full z-10 absolute top-20 left-24 text-white">
            <h1 className="text-5xl font-bold">{s.text}</h1>
            <p className="text-base font-semibold">{s.desc}</p>
            <button
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              className="py-3 w-3/5 justify-center gap-2 flexbox bg-white text-black rounded-full hover:bg-black hover:text-white transition-all "
            >
              <span id="span" className="translate-x-3">
                Buy Samsung Z Flip
              </span>
              <img
                src={arrow}
                alt=""
                id="arrow"
                className="w-5 h-5 -rotate-90 opacity-0 translate-x-7"
              />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
