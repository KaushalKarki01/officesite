import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import './testimonials.scss'
import man from '../../assets/man.jpg'
import woman from '../../assets/woman.jpg'
export const Testimonials = () => {
  return (
    <div className='testimonial' id='testimonial'>
        <div className="container testimonials p-4">
            <h2 className='common-heading'>Our Happy Clients</h2>
        <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
       breakpoints={{
        //when the width is greater than 800px
        800:{
            slidesPerView:2,
        },
        //when the width is greater than 50px
        50:{
            slidesPerView:1,
        }
       }}
        autoplay={{
            delay:2500,
            disableOnInteraction:false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
            <div>
                <div className="client-msg">
                    <p>"Sometimes when I'm talking, my words can't keep up with my thoughts.. I wonder why we think faster than we speak. Probably so we can think twice."</p>
                </div>
                <div className="client-data">
                    <figure><img src={man} alt="" /></figure>
                    <div className="client-data-details">
                        <p>Kaushal Karki</p>
                        <p>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="client-msg">
                    <p>"Sometimes when I'm talking, my words can't keep up with my thoughts.. I wonder why we think faster than we speak. Probably so we can think twice."</p>
                </div>
                <div className="client-data">
                    <figure><img src={woman} alt="" /></figure>
                    <div className="client-data-details">
                        <p>Nikki Karki</p>
                        <p>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="client-msg">
                    <p>"Sometimes when I'm talking, my words can't keep up with my thoughts.. I wonder why we think faster than we speak. Probably so we can think twice."</p>
                </div>
                <div className="client-data">
                    <figure><img src={man} alt="" /></figure>
                    <div className="client-data-details">
                        <p>Kaushal Karki</p>
                        <p>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="client-msg">
                    <p>"Sometimes when I'm talking, my words can't keep up with my thoughts.. I wonder why we think faster than we speak. Probably so we can think twice."</p>
                </div>
                <div className="client-data">
                    <figure><img src={woman} alt="" /></figure>
                    <div className="client-data-details">
                        <p>Nikki Karki</p>
                        <p>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="client-msg">
                    <p>"Sometimes when I'm talking, my words can't keep up with my thoughts.. I wonder why we think faster than we speak. Probably so we can think twice."</p>
                </div>
                <div className="client-data">
                    <figure><img src={man} alt="" /></figure>
                    <div className="client-data-details">
                        <p>Kaushal Karki</p>
                        <p>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="client-msg">
                    <p>"Sometimes when I'm talking, my words can't keep up with my thoughts.. I wonder why we think faster than we speak. Probably so we can think twice."</p>
                </div>
                <div className="client-data">
                    <figure><img src={woman} alt="" /></figure>
                    <div className="client-data-details">
                        <p>Nikki Karki</p>
                        <p>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}
