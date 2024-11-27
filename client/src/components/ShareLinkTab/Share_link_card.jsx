import { useState, useEffect, useRef } from "react"; // useState, useEffect 추가
import images from "../js/images.js";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
export function Share_link_card({ category, productId }) {
  const [product, setProduct] = useState(null); // 선택된 제품 정보 상태 저장
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  const skeleton = [1, 2, 3, 4, 5, 6];

  // category와 productId가 변경될 때마다 데이터 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // 데이터 로딩 시작
        const response = await fetch(`${API_BASE_URL}/product/${category}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const result = await response.json(); // 응답을 JSON으로 파싱
        // console.log(result); // 결과 출력

        // result에서 productId에 해당하는 제품만 필터링하여 상태에 저장
        const selectedProduct = result.find((item) => item._id === productId);
        if (selectedProduct) {
          setProduct(selectedProduct); // 해당 제품 정보를 상태에 저장
          setIsLoading(false); // 데이터 로딩 종료
          // console.log(selectedProduct);
        } else {
          console.log("제품을 찾을 수 없습니다.");
          setIsLoading(false); // 데이터 로딩 종료
        }
      } catch (error) {
        console.error("데이터 요청 실패:", error); // 에러 처리
        setIsLoading(false); // 데이터 로딩 실패 후에도 종료
      }
    };

    fetchData(); // 데이터 요청
  }, [productId]); // productId가 변경될 때마다 실행

  return (
    <div className="shareTab">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={0} // 첫 번째 슬라이드로 설정
        loop={true}
        // grabCursor={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
      >
        {isLoading === false
          ? product.img.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="shareTabImg">
                  <img src={images[`${image}.jpg`]} alt={image ? `${image}` : "이미지 없음"} className="product_image" />
                </div>
              </SwiperSlide>
            ))
          : skeleton.map((data) => (
              <SwiperSlide key={data}>
                <div className="shareTabImg">
                  <Skeleton width={"100%"} height={"100%"} baseColor="#f7e1c7" />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      <div className="shareTabExplain">
        <strong className="textTitle">
          <p className="textTitlePaddig">
            {product?.workshop || "데이터 없음"} / {product?.name || "데이터 없음"}
          </p>
        </strong>
        <li className="subTextTitle">
          원가 : {product?.cost || "데이터 없음"} / 나눔가격 : {product?.price || "데이터 없음"}
        </li>
        <li className="subTextTitle">- 나눔사유 : {product?.reason || "데이터 없음"}</li>
        <li className="subTextTitle">
          -{product?.size?.[0] || 0} <span>*</span> {product?.size?.[1] || 0} <span>*</span> {product?.size?.[2] || 0} (가로/세로/높이 단위:mm)
        </li>
      </div>
    </div>
  );
}
