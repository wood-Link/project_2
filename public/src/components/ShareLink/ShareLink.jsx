import ShareLinkTab from "../ShareLinkTab/ShareLinkTab";
import "./ShareLink.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

function ShareLink() {
  const [contents, setContents] = useState(false);

  function listToggle() {
    setContents((prevState) => !prevState);
  }
  return (
    <main className="ShareLinkBoxMom">
      <div className="ShareLinkBox">
        <section className="titleBox">
          <li className="title">나눔링크</li>
          <li className="subTitle">
            공방 사장님들의 스크래치, 리퍼브 제품들을 나눔해요
          </li>
        </section>
        <section className="aside">
          <aside>
            <div className="buttons">
              <div>책상</div>
              <div>의자</div>
              <div>소모품</div>
              <div>식탁</div>
              <div>기타</div>
            </div>
          </aside>
        </section>
        <section className="ShareLinkList">
          <Swiper
            spaceBetween={90}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide onClick={listToggle}>3</SwiperSlide>
            <SwiperSlide onClick={listToggle}>3</SwiperSlide>
            <SwiperSlide onClick={listToggle}>3</SwiperSlide>
            <SwiperSlide onClick={listToggle}>3</SwiperSlide>
            <SwiperSlide onClick={listToggle}>2</SwiperSlide>

            {/* .map으로 리스트 출력시 예시 */}
            {/* {cardList.map(card => <SwiperSlide key={card.id} onClick={listToggle}>{card}</SwiperSlide>)} */}
            {/* useState로 map을 사용 할 배열의 이름을 바꾸면 되려나 */}
          </Swiper>
        </section>
        {contents ? <ShareLinkTab setContents={setContents} /> : null}
      </div>
    </main>
  );
}

export default ShareLink;
