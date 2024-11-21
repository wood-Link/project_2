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
import { useState, useEffect } from "react";

function Review() {
  const [reviewData, setReviewData] = useState([]); // api 데이터
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // 데이터 로딩 시작
        const response = await fetch(`http://13.236.93.243:8001/api/review/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const result = await response.json(); // 응답을 JSON으로 파싱
        setReviewData(result);
        setIsLoading(false); // 데이터 로딩 완료
      } catch (error) {
        console.error("데이터 요청 실패:", error); // 에러 처리
        setIsLoading(false); // 데이터 로딩 실패 후에도 종료
      }
    };

    fetchData();
  }, [reviewData]);
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
              700: {
                slidesPerView: 2.5, // 436px 이하에서 1개의 슬라이드 표시
                spaceBetween: 30, // 간격은 필요에 따라 조정
                centeredSlides: true,
              },
              436: {
                slidesPerView: 1.7, // 436px 이하에서 1개의 슬라이드 표시
                spaceBetween: 30, // 간격은 필요에 따라 조정
                // centeredSlides: true,
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
            {/* {reviewData.map((data) => (
              <SwiperSlide key={data._id}>
                <Card
                  data={data}
                />
              </SwiperSlide>
            ))} */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Review;
