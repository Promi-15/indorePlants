// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
const Review = () => {
  return (
    <div id="review">
      <div className="bg-[#0e2815] p-14 relative">
        <div className="text-center pb-5">
          <h1 className="text-5xl text-yellow-600">Customer Review</h1>
          <p className="text-white">Follow instructions for more</p>
        </div>
        <div className="absolute w-40 top-0 left-0">
          <img src="/public/leaf-4.png" alt="" />
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="max-w-5xl mx-auto border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
              <div className="text-white lg:w-1/2 mx-auto italic ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam rem nulla consequatur ullam! Nisi, veniam.
              </div>
              <div className="flex gap-4 mx-auto  justify-center my-5">
                <div>
                  <img
                    src="/public/review-1.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
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
              <div className="text-white lg:w-1/2 mx-auto italic ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam rem nulla consequatur ullam! Nisi, veniam.
              </div>
              <div className="flex gap-4 mx-auto  justify-center my-5">
                <div>
                  <img
                    src="/public/review-2.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-yellow-600">JHON DOE</h1>
                  <p className="text-white">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="max-w-5xl mx-auto border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
              <div className="text-white lg:w-1/2 mx-auto italic ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam rem nulla consequatur ullam! Nisi, veniam.
              </div>
              <div className="flex gap-4 mx-auto  justify-center my-5">
                <div>
                  <img
                    src="/public/review-4.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-yellow-600">JHON DOE</h1>
                  <p className="text-white">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="max-w-5xl mx-auto border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
              <div className="text-white lg:w-1/2 mx-auto italic ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam rem nulla consequatur ullam! Nisi, veniam.
              </div>
              <div className="flex gap-4 mx-auto  justify-center my-5">
                <div>
                  <img
                    src="/public/review-3.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-yellow-600">JHON DOE</h1>
                  <p className="text-white">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
