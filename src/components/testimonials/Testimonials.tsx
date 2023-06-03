import React from "react";
import { Data } from "./Data";

import "./testimonials.css";
//import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  console.log("heelo");
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        className="testimonial__container"
      >
        {Data.map(({ id, image, title, description, style }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img
                className="testimonial__img"
                src={image}
                alt=""
                style={style}
              />

              <h3 className="testimonial__name text-center">{title}</h3>
              <p className="testimonial__description text-center">
                {description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
