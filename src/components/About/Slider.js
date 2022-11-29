import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay} from "swiper";
import allomovie from '../../assets/img/allomovie.png'
import paradise from '../../assets/img/paradise.png'
import pegase from '../../assets/img/pegase.png'
import roubaixmusic from '../../assets/img/roubaix-music.png'
import ucs from '../../assets/img/ucs.png'

export default function App() {
  return (
    <div className="mt-20 pb-20 h-96">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="flex justify-center items-center">
          <a href="https://github.com/ElisaROGGE/Allo-movie" target="_blank" rel="noreferrer">
            <figure className="h-60 shadow-2xl rounded-lg transition hover:scale-110  ">
              <img src={allomovie} className='w-full h-full' alt="allomovie"/>
              <figcaption className="w-full">AlloMovie</figcaption>
            </figure>
          </a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <a href="https://github.com/ElisaROGGE/Paradise" target="_blank" rel="noreferrer" >
            <figure className="h-60 shadow-2xl rounded-lg transition hover:scale-110  ">
              <img src={paradise} className='w-full h-full' alt="paradise"/>
              <figcaption className="w-full">Paradise</figcaption>
            </figure>
          </a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <a href="https://www.pegase-energies.com/" target="_blank" rel="noreferrer" >
            <figure className="h-60 shadow-2xl rounded-lg transition hover:scale-110  ">
              <img src={pegase} className='w-full h-full' alt="pegase"/>
              <figcaption className="w-full">Pegase energies</figcaption>
            </figure>
          </a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <a href="https://www.roubaixmusic.com/" target="_blank" rel="noreferrer" >
            <figure className="h-60 shadow-2xl rounded-lg transition hover:scale-110  ">
              <img src={roubaixmusic} className='w-full h-full' alt="roubaix-music"/>
              <figcaption className="w-full">Roubaix Music</figcaption>
            </figure>
          </a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <a href="https://www.ucs-fermetures.fr/" target="_blank" rel="noreferrer" >
            <figure className="h-60 shadow-2xl rounded-lg transition hover:scale-110  ">
              <img src={ucs} className='w-full h-full' alt="ucs-fermetures"/>
              <figcaption className="w-full">UCS Fermetures</figcaption>
            </figure>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}