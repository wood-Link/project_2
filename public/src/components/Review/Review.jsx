// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import "./Swiper.css";
import Style from "./Review.module.css";
import Card from "./Card";
import thum from "../../assets/shot.png";

function Review() {
  return (
    <>
      <section className={Style.review_section}>
        <div className={Style.title}>후기</div>
        <div className={Style.swiper_Warp}>
          <Swiper
            spaceBetween={45}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Card img={thum} title={"타이틀"} name={"이름"} review={"리뷰"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card img={thum} title={"타이틀"} name={"이름"} review={"리뷰"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card img={thum} title={"타이틀"} name={"이름"} review={"리뷰"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card img={thum} title={"타이틀"} name={"이름"} review={"리뷰"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Review;
