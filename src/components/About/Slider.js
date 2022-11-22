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
    <div className="mt-20">
      <Swiper
        slidesPerView={2}
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
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center"><a href="https://github.com/ElisaROGGE/Allo-movie" target="_blank" rel="noreferrer" className=""><img src={allomovie} className='h-60 ml-20 ' alt="allomovie"></img>AlloMovie</a></SwiperSlide>
        <SwiperSlide className="flex justify-center"><a href="https://github.com/ElisaROGGE/Paradise" target="_blank" rel="noreferrer" ><img src={paradise} className='h-60 ml-20' alt="paradise"></img></a></SwiperSlide>
        <SwiperSlide className="flex justify-center"><a href="https://www.pegase-energies.com/" target="_blank" rel="noreferrer" ><img src={pegase} className='h-60 ml-20' alt="pegase-energies"></img></a></SwiperSlide>
        <SwiperSlide className="flex justify-center"><a href="https://www.roubaixmusic.com/" target="_blank" rel="noreferrer" ><img src={roubaixmusic} className='h-60 ml-20' alt="roubaix-music"></img></a></SwiperSlide>
        <SwiperSlide className="flex justify-center"><a href="https://www.ucs-fermetures.fr/" target="_blank" rel="noreferrer" ><img src={ucs} className='h-60 ml-20' alt="ucs-fermetures"></img></a></SwiperSlide>
      </Swiper>
    </div>
  );
}