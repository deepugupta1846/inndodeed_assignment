import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { cars } from "../API/cars";
import { CarCard } from "./CarCard";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

export default function Carosel() {
  const carsData = cars;
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        breakpoints={{
          800: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {carsData.map((car) => {
          return (
            <SwiperSlide>
              <CarCard data={car} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
