import React from 'react'
import './testimonial.css'
import  AVI1 from '../../assets/notMe'
import  AVI2 from '../../assets/not.jfif'
import  AVI3 from '../../assets/me2.png'
import  AVI4 from '../../assets/me.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
  {
    avatar: AVI1,
    name: 'aaaaaaaa',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium consequatur ab animi explicabo, unde libero! Placeat iure id necessitatibus provident sed quam molestiae quasi consequuntur. Animi quibusdam commodi aliquid?',
  },
  {
    avatar: AVI2,
    name: 'bbbbbbb',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium consequatur ab animi explicabo, unde libero! Placeat iure id necessitatibus provident sed quam molestiae quasi consequuntur. Animi quibusdam commodi aliquid?',
  },
  {
    avatar: AVI3,
    name: 'ccccc',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium consequatur ab animi explicabo, unde libero! Placeat iure id necessitatibus provident sed quam molestiae quasi consequuntur. Animi quibusdam commodi aliquid?',
  },
  {
    avatar: AVI4,
    name: 'dddd',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium consequatur ab animi explicabo, unde libero! Placeat iure id necessitatibus provident sed quam molestiae quasi consequuntur. Animi quibusdam commodi aliquid?',
  },
]

const Testimonial = () => {
  return (
  <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonialContainer" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({avatar, name ,review}, index) =>{
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="clientAvatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='clientName'>{name}</h5>
             <small className="clientReview">
              {review}
              </small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  </section>
  )
}

export default Testimonial