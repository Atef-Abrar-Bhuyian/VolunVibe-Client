import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import banner1 from "../../assets/banner-images/banner1.jpg";
import banner2 from "../../assets/banner-images/banner2.jpg";
import banner3 from "../../assets/banner-images/banner3.jpg";
import banner4 from "../../assets/banner-images/banner4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="cursor-pointer">
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 p-4 md:p-0">
            <div className="flex-1">
              <img src={banner1} alt="" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
              <div>
                <h1 className="md:text-2xl font-bold">Join Our Community</h1>
              </div>
              <p className="w-3/4">
                Become a part of a passionate volunteer community and make a
                difference in the lives of others. Together, we can achieve more
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 p-4 md:p-0">
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
              <div>
                <h1 className="md:text-2xl font-bold">Make an Impact</h1>
              </div>
              <p className="w-3/4">
                Your time and skills can create a lasting impact. Volunteer with
                us and contribute to meaningful projects that change lives
              </p>
            </div>
            <div className="flex-1">
              <img src={banner2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 p-4 md:p-0">
            <div className="flex-1">
              <img src={banner3} alt="" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
              <div>
                <h1 className="md:text-2xl font-bold">Empower Others</h1>
              </div>
              <p className="w-3/4">
                Empower individuals and communities through your volunteer
                efforts. Help us build a better tomorrow, one action at a time
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 p-4 md:p-0">
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
              <div>
                <h1 className="md:text-2xl font-bold">
                  Discover Opportunities
                </h1>
              </div>
              <p className="w-3/4">
                Explore a variety of volunteering opportunities that match your
                interests and skills. Find the perfect way to give back
              </p>
            </div>
            <div className="flex-1">
              <img src={banner4} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
