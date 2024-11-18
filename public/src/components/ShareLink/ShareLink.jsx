import ShareLinkTab from "../ShareLinkTab/ShareLinkTab";
import "./ShareLink.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "Swiper/css";
import "Swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

import dummyData from "./dummyData";

function ShareLink() {
  const [contents, setContents] = useState(false); // 나눔 신청 폼 토글
  const [category, setCategory] = useState("desk"); // 카테고리 선택
  const [productId, setProductId] = useState(null); // 자식 컴포넌트에서 상품의 데이터를 찾을 때 사용

  function listToggle(dataId) {
    setContents((prevState) => !prevState);
    setProductId(dataId);
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
            {dummyData[category].map((data) => (
              <SwiperSlide key={data.id} onClick={() => listToggle(data.id)}>
                <img className="shareImg" src={data.img}></img>
              </SwiperSlide>
            ))}
            {/* map 테스트중 */}
            {/* .map으로 리스트 출력시 예시 */}
            {/* {cardList.map(card => <SwiperSlide key={card.id} onClick={listToggle}>{card}</SwiperSlide>)} */}
            {/* useState로 map을 사용 할 배열의 이름을 바꾸면 되려나 */}
          </Swiper>
        </section>
        {contents ? (
          <ShareLinkTab
            setContents={setContents}
            productId={productId}
            category={category}
          />
        ) : null}
      </div>
    </main>
  );
}

export default ShareLink;
