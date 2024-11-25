import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ShareLinkTab from "../ShareLinkTab/ShareLinkTab.jsx";
import "./ShareLink.css";
import images from "../js/images.js";
import { swiperConfig } from "../js/swiperConfig.js";

function ShareLink() {
  const [category, setCategory] = useState("desk");
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [productInfo, setProductInfo] = useState({
    productId: "",
    product: "",
    location: "",
  });
  const skeleton = [1, 2, 3, 4, 5, 6];
  const swiperRef = useRef(null); // swiper 초기화 용도
  const shareLinkTabRef = useRef(null); // ShareLinkTab을 참조하는 ref
  const topRef = useRef(null); // 페이지 상단을 참조하는 ref

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://13.236.93.243:8001/api/product/${category}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const result = await response.json();
        setProducts(result);
        setIsLoading(false);
      } catch (error) {
        console.error("데이터 요청 실패:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category]);

  // swiper 초기화 함수
  useEffect(() => {
    if (!isLoading && swiperRef.current) {
      swiperRef.current.swiper.update();
      swiperRef.current.swiper.autoplay.start();
    }
  }, [isLoading]);

  // selectedProductId가 변경될 때마다 화면 이동
  useEffect(() => {
    if (selectedProductId && shareLinkTabRef.current) {
      shareLinkTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedProductId]);

  // selectedProductId가 null로 변경될 때 페이지 상단으로 스크롤
  useEffect(() => {
    if (selectedProductId === null && topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedProductId]);

  // 제품 이미지 클릭 시 상태 업데이트
  function handleCardClick(productId, product, location) {
    if (selectedProductId === productId) {
      // 이미 선택된 제품인 경우 화면 이동 방지
      return;
    }

    // 새로운 제품 선택 시 상태 업데이트
    setSelectedProductId(productId);
    setProductInfo({
      productId,
      product,
      location,
    });
  }

  return (
    <main className="ShareLinkBoxMom">
      {/* 페이지 상단 참조를 위한 div */}
      <div ref={topRef} />

      <div className="ShareLinkBox" id="ShareLinkBox">
        <section className="titleBox">
          <li className="title">나눔링크</li>
          <li className="subTitle">
            공방 사장님들의 스크래치, 리퍼브 제품들을 나눔해요
          </li>
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
                  <SwiperSlide
                    key={data._id}
                    onClick={() =>
                      handleCardClick(data._id, data.name, data.workshop)
                    }
                  >
                    <img
                      className="shareImg"
                      src={
                        isLoading
                          ? images["loading.gif"]
                          : images[`${data.img[0]}.jpg`]
                      }
                      alt={data.name}
                    />
                  </SwiperSlide>
                ))
              : skeleton.map((data) => (
                  <SwiperSlide key={data}>
                    <Skeleton
                      width={"100%"}
                      height={"340px"}
                      baseColor="#f7e1c7"
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </section>

        {/* 선택된 제품에 대해 카드 렌더링 */}
        {selectedProductId && (
          <div ref={shareLinkTabRef}>
            <ShareLinkTab
              setSelectedProductId={setSelectedProductId}
              productInfo={productInfo}
              category={category}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default ShareLink;
