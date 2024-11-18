// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

import "./Swiper.css";
import Style from "./Review.module.css";
import Card from "./Card.jsx";
import thum from "../../assets/shot.png";

function Review() {
  return (
    <>
      <section className={Style.review_section} id="reviewBox">
        <div className={Style.title}>후기</div>
        <div className={Style.swiper_Warp}>
          <Swiper
            spaceBetween={45}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 3.5, // 436px 이하에서 1개의 슬라이드 표시
                spaceBetween: 30, // 간격은 필요에 따라 조정
                centeredSlides: true,
              },
              436: {
                slidesPerView: 2.5, // 436px 이하에서 1개의 슬라이드 표시
                spaceBetween: 30, // 간격은 필요에 따라 조정
                centeredSlides: true,
              },
            }}
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
