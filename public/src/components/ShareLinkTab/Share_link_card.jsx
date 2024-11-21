import { useState, useEffect } from "react"; // useState, useEffect 추가

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "Swiper/css";
import "Swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

export function Share_link_card({ category, productId }) {
  const [product, setProduct] = useState(null); // 선택된 제품 정보 상태 저장

  // category와 productId가 변경될 때마다 데이터 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://13.236.93.243:8001/api/product/${category}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const result = await response.json(); // 응답을 JSON으로 파싱
        // console.log(result); // 결과 출력

        // result에서 productId에 해당하는 제품만 필터링하여 상태에 저장
        const selectedProduct = result.find((item) => item._id === productId);
        if (selectedProduct) {
          setProduct(selectedProduct); // 해당 제품 정보를 상태에 저장
        } else {
          console.log("제품을 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("데이터 요청 실패:", error); // 에러 처리
      }
    };

    fetchData(); // 데이터 요청
  }, [category, productId]); // category나 productId가 변경될 때마다 실행

  // 데이터가 로딩 중이면 로딩 메시지 표시
  if (!product) {
    return <div>제품 데이터를 로딩 중...</div>;
  }

  return (
    <div className="shareTab">
      {/* 슬라이더 구현중 */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
      >
        {product?.img?.length > 0 ? (
          product.img.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="shareTabImg">
                <img
                  src={`../../../assets/img/${image}.jpg`}
                  alt={product?.name ? `${product.name}` : "이미지 없음"}
                  className="product_image"
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="shareTabImg">
              <p>이미지가 없습니다.</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      <div className="shareTabExplain">
        <strong className="textTitle">
          <p className="textTitlePaddig">
            {product?.workshop || "데이터 없음"} /{" "}
            {product?.name || "데이터 없음"}
          </p>
        </strong>
        <li className="test">
          원가 : {product?.cost || "데이터 없음"} / 나눔가격 :{" "}
          {product?.price || "데이터 없음"}
        </li>
        <li className="subTextTitle">
          - 나눔사유 : {product?.reason || "데이터 없음"}
        </li>
        <li className="subTextTitle">
          -{product?.size?.[0] || 0} <span>*</span> {product?.size?.[1] || 0}{" "}
          <span>*</span> {product?.size?.[2] || 0} (가로/세로/높이 단위:mm)
        </li>
      </div>
    </div>
  );
}
