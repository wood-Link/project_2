// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "Swiper/css";
import "Swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useState } from "react";
import ShareLinkTab from "../ShareLinkTab/ShareLinkTab.jsx";
import "./ShareLink.css";
import dummyData from "./dummyData";

function ShareLink() {
  const [contents, setContents] = useState(false); // 나눔 신청 폼 토글
  const [category, setCategory] = useState("desk"); // 카테고리 선택

  const [productInfo, setProductInfo] = useState({
    // 제품의 아이디와 제품명, 제작 한 공방의 이름이 담김
    productId: "",
    product: "",
    location: "",
  });

  // 리스트 토글기능 및 클릭한 제품의 정보 state로 저장
  function listToggle(productId, product, location) {
    setContents((prevState) => !prevState);
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
            modules={[Autoplay, Navigation]}
            breakpoints={{
              736: {
                slidesPerView: 3.5, // 436px 이하에서 1개의 슬라이드 표시
                spaceBetween: 30, // 간격은 필요에 따라 조정
                centeredSlides: true,
              },
              436: {
                slidesPerView: 1.5, // 436px 이하에서 1개의 슬라이드 표시
                spaceBetween: 30, // 간격은 필요에 따라 조정
                centeredSlides: true,
              },
            }}
          >
            {/* dummyData에서 카테고리는 useState로 선택됨 */}
            {dummyData[category].map((data) => (
              <SwiperSlide
                key={data.id}
                onClick={() => listToggle(data.id, data.name, data.location)}
              >
                <img className="shareImg" src={data.img}></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* 리스트의 상품을 클릭하면 폼 생성 후 props로 토글 기능과 간단한 정보, 카테고리를 전달 */}
        {contents ? (
          <ShareLinkTab
            setContents={setContents}
            productInfo={productInfo}
            category={category}
          />
        ) : null}
      </div>
    </main>
  );
}

export default ShareLink;
