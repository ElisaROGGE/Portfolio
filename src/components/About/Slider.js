import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import allomovie from '../../assets/img/allomovie.png'
import paradise from '../../assets/img/paradise.png'
import pegase from '../../assets/img/pegase.png'
import roubaixmusic from '../../assets/img/roubaix-music.png'
import ucs from '../../assets/img/ucs.png'

export default function App() {
  return (
    <div className="mt-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><a href="https://github.com/ElisaROGGE/Allo-movie" target="_blank"><img src={allomovie} className='h-48 ml-20'></img></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/ElisaROGGE/Paradise" target="_blank"><img src={paradise} className='h-48 ml-20'></img></a></SwiperSlide>
        <SwiperSlide><a href="https://www.pegase-energies.com/" target="_blank"><img src={pegase} className='h-48 ml-20'></img></a></SwiperSlide>
        <SwiperSlide><a href="https://www.roubaixmusic.com/" target="_blank"><img src={roubaixmusic} className='h-48 ml-20'></img></a></SwiperSlide>
        <SwiperSlide><a href="https://www.ucs-fermetures.fr/" target="_blank"><img src={ucs} className='h-48 ml-20'></img></a></SwiperSlide>
      </Swiper>
    </div>
  );
}