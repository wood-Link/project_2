import { Swiper, SwiperSlide } from "swiper/react";
import "Swiper/css";
import "Swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useState, useEffect } from "react";
import ShareLinkTab from "../ShareLinkTab/ShareLinkTab.jsx";
import "./ShareLink.css";
import images from "../js/images.js";
function ShareLink() {
  const [category, setCategory] = useState("desk"); // 카테고리 선택
  const [products, setProducts] = useState([]); // api 데이터
  const [selectedProductId, setSelectedProductId] = useState(null); // 선택된 제품 ID
  const [productInfo, setProductInfo] = useState({
    productId: "",
    product: "",
    location: "",
  });

  // 로딩 상태 추가
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // 데이터 로딩 시작
        const response = await fetch(
          `http://13.236.93.243:8001/api/product/${category}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
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

  // 제품 클릭 시 상태 업데이트
  function handleCardClick(productId, product, location) {
    setSelectedProductId(
      (prevState) => (prevState === productId ? null : productId) // 이미 선택된 제품을 다시 클릭하면 해당 제품을 사라지게 함
    );
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
          {/* 로딩 중일 때는 로딩 상태를 표시 */}
          {isLoading ? (
            <div className="loading">로딩 중...</div>
          ) : (
            <Swiper
              spaceBetween={45}
              slidesPerView={1}
              // initialSlide={0} // 첫 번째 슬라이드로 설정
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
                436: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
              }}
            >
              {products.map((data) => (
                <SwiperSlide
                  key={data._id}
                  onClick={() =>
                    handleCardClick(data._id, data.name, data.workshop)
                  }
                >
                  <img
                    className="shareImg"
                    // 객체-[객체데이터 접근].jpg
                    src={images[`${data.img[0]}.jpg`]}
                    alt={data.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>

        {/* 선택된 제품에 대해 카드 렌더링 */}
        {selectedProductId && (
          <ShareLinkTab
            setSelectedProductId={setSelectedProductId}
            productInfo={productInfo}
            category={category}
          />
        )}
      </div>
    </main>
  );
}

export default ShareLink;
