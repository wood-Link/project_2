import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Review.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./Swiper.css";
import Style from "./Review.module.css";
import Card from "./Review_Card.jsx";
import { swiperConfig } from "../js/swiperConfig.js";
import { useState, useEffect, useRef } from "react";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
function Review() {
  const [reviewData, setReviewData] = useState([]); // api 데이터
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  const skeleton = [1, 2, 3, 4, 5, 6];
  const swiperRef = useRef(null); // Swiper 인스턴스를 참조

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // 데이터 로딩 시작
        const response = await fetch(`${API_BASE_URL}/review/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const result = await response.json(); // 응답을 JSON으로 파싱
        if (result.length < 1) {
          console.log("데이터가 없습니다");
        }
        setReviewData(result);
        setIsLoading(false); // 데이터 로딩 완료
      } catch (error) {
        console.error("데이터 요청 실패:", error); // 에러 처리
        setIsLoading(false); // 데이터 로딩 실패 후에도 종료
      }
    };

    fetchData();
  }, []);

  // isLoading이 변경될 때 Swiper 슬라이드를 갱신
  useEffect(() => {
    if (!isLoading && swiperRef.current) {
      swiperRef.current.swiper.update(); // Swiper 업데이트
      swiperRef.current.swiper.autoplay.start(); // 자동 슬라이드 시작
    }
  }, [isLoading]);

  return (
    <section className={Style.reviewBoxMom}>
      <section className={Style.review_section} id="reviewBox">
        <div className={Style.title}>후기</div>
        <div className={Style.titleSub}>
          "나눔을 받은 분들의 소중한 후기입니다."
        </div>
        <div className={Style.swiper_Warp}>
          <Swiper {...swiperConfig} ref={swiperRef}>
            {isLoading
              ? skeleton.map((data, index) => (
                  <SwiperSlide key={index}>
                    {/* Skeleton 로딩 UI */}
                    <div className={Style.cardBox}>
                      <Skeleton width={"100%"} height={265} />
                      <div className={Style.cardTitle}>
                        <Skeleton width={150} />
                      </div>
                      <div className={Style.cardName}>
                        <Skeleton width={100} />
                      </div>
                      <div className={Style.cardReview}>
                        <Skeleton count={3} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : reviewData.map((data) => (
                  <SwiperSlide key={data._id}>
                    <Card data={data} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
}

export default Review;
