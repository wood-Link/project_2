// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import Style from "./Review.module.css";
import "./Swiper.css";
import Card from "./Card";

function Review() {
  return (
    <>
      <section className={Style.review_section}>
        <div className={Style.title}>후기</div>
        <div className={Style.swiper_body}>
          <Swiper
            spaceBetween={45}
            slidesPerView={3}
            // watchOverflow={true}
            loop={true}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Review;
