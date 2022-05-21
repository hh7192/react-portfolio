import React from "react";
import "./quotes.css";
import data from "./data";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper";

const Quotes = () => {
  return (
    <section id='quotes'>
      <h5>Inspirational Quotes</h5>
      <h2>Quotes</h2>
      <Swiper
        className='container quotes__container mySwiper'
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}>
        {data.map(({id, avatar, name, title, quote}) => {
          return (
            <SwiperSlide key={id} className='quote'>
              <div className='figure__avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h4 className='figure__name'>{name}</h4>
              <h5 className='text-light'>{title}</h5>
              <small className='figure__quote'>{quote}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Quotes;
