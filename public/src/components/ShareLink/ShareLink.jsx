import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useState, useEffect, useRef } from "react";
import ShareLinkTab from "../ShareLinkTab/ShareLinkTab.jsx";
import "./ShareLink.css";
import images from "../js/images.js";
import { swiperConfig } from "../js/swiperConfig.js";

function ShareLink() {
  const [category, setCategory] = useState("desk"); // 카테고리 선택
  const [products, setProducts] = useState([]); // api 데이터
  const [selectedProductId, setSelectedProductId] = useState(null); // 선택된 제품 ID
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [productInfo, setProductInfo] = useState({
    productId: "",
    product: "",
    location: "",
  });
  const skeleton = [1, 2, 3, 4, 5, 6];
  const swiperRef = useRef(null); // Swiper 인스턴스를 참조

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // 데이터 로딩 시작
        const response = await fetch(`http://13.236.93.243:8001/api/product/${category}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const result = await response.json(); // 응답을 JSON으로 파싱
        setProducts(result);
        setIsLoading(false); // 데이터 로딩 완료
      } catch (error) {
        console.error("데이터 요청 실패:", error); // 에러 처리
        setIsLoading(false); // 데이터 로딩 실패 후에도 종료
      }
    };

    fetchData();
  }, [category]);

  // isLoading이 변경될 때 Swiper 슬라이드를 갱신
  useEffect(() => {
    if (!isLoading && swiperRef.current) {
      swiperRef.current.swiper.update(); // Swiper 업데이트
      swiperRef.current.swiper.autoplay.start(); // 자동 슬라이드 시작
    }
  }, [isLoading]);

  // 제품 클릭 시 상태 업데이트
  function handleCardClick(productId, product, location) {
    setSelectedProductId(
      (prevState) => (prevState === productId ? null : productId) // 이미 선택된 제품을 다시 클릭하면 닫힘
    );
    // 제품의 정보를 state로 저장
    setProductInfo({
      productId: productId,
      product: product,
      location: location,
    });
  }

  return (
    <main className="ShareLinkBoxMom">
      <div className="ShareLinkBox" id="ShareLinkBox">
        <section className="titleBox">
          <li className="title">나눔링크</li>
          <li className="subTitle">"공방 사장님들의 스크래치, 리퍼브 제품들을 나눔해요" (나눔 받고싶은 가구를 클릭해주세요.)</li>
        </section>
        <section className="aside">
          <aside>
            <div className="buttons">
              <div onClick={() => setCategory("desk")}>책상</div>
              <div onClick={() => setCategory("chair")}>의자</div>
              <div onClick={() => setCategory("expendables")}>소모품</div>
              <div onClick={() => setCategory("table")}>식탁</div>
              <div onClick={() => setCategory("etc")}>기타</div>
            </div>
          </aside>
        </section>

        <section className="ShareLinkList">
          <Swiper {...swiperConfig} ref={swiperRef}>
            {isLoading === false
              ? products.map((data) => (
                  <SwiperSlide key={data._id} onClick={() => handleCardClick(data._id, data.name, data.workshop)}>
                    <img className="shareImg" src={isLoading ? images["loading.gif"] : images[`${data.img[0]}.jpg`]} alt={data.name} />
                  </SwiperSlide>
                ))
              : skeleton.map((data) => (
                  <SwiperSlide key={data}>
                    <Skeleton width={"100%"} height={"340px"} baseColor="#f7e1c7" />
                  </SwiperSlide>
                ))}
          </Swiper>
        </section>

        {/* 선택된 제품에 대해 카드 렌더링 */}
        {selectedProductId && <ShareLinkTab setSelectedProductId={setSelectedProductId} productInfo={productInfo} category={category} />}
      </div>
    </main>
  );
}

export default ShareLink;
