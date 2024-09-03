import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";
import { Navigation } from 'swiper/modules';
const Review = () => {
  return (
    <div className="bg-[#0e2815] p-14">
      <Swiper
        navigation={true} modules={[Navigation]} className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-5xl mx-auto border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
            <div className="text-white w-1/2 mx-auto italic " >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              rem nulla consequatur ullam! Nisi, veniam.
            </div>
            <div className="flex gap-4 mx-auto  justify-center my-5">
              <div>
                <img src="/public/review-1.jpg" alt="" className="w-12 h-12 rounded-full"/>
              </div>
              <div>
                <h1 className="text-yellow-600">JHON DOE</h1>
                <p className="text-white">Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-5xl mx-auto border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
            <div className="text-white w-1/2 mx-auto italic " >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              rem nulla consequatur ullam! Nisi, veniam.
            </div>
            <div className="flex gap-4 mx-auto  justify-center my-5">
              <div>
                <img src="/public/review-1.jpg" alt="" className="w-12 h-12 rounded-full"/>
              </div>
              <div>
                <h1 className="text-yellow-600">JHON DOE</h1>
                <p className="text-white">Designer</p>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>  <div className="max-w-5xl mx-auto border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
            <div className="text-white w-1/2 mx-auto italic " >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              rem nulla consequatur ullam! Nisi, veniam.
            </div>
            <div className="flex gap-4 mx-auto  justify-center my-5">
              <div>
                <img src="/public/review-1.jpg" alt="" className="w-12 h-12 rounded-full"/>
              </div>
              <div>
                <h1 className="text-yellow-600">JHON DOE</h1>
                <p className="text-white">Designer</p>
              </div>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
