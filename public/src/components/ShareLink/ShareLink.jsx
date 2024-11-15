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

/*이미지 넣어보기 화면허전해서 넣어봣음 */
import share1 from "../../assets/img/share1_1.jpg";
import share2 from "../../assets/img/share2_1.jpg";
import share3 from "../../assets/img/share3_1.jpg";
import share4 from "../../assets/img/share4_1.jpg";
import share5 from "../../assets/img/share5_1.jpg";

function ShareLink() {
  const [contents, setContents] = useState(false);

  function listToggle() {
    setContents((prevState) => !prevState);
  }
  return (
    <main className="ShareLinkBoxMom">
      <div className="ShareLinkBox" id="ShareLinkBox">
        <section className="titleBox">
          <li className="title">나눔링크</li>
          <li className="subTitle">공방 사장님들의 스크래치, 리퍼브 제품들을 나눔해요</li>
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
            <SwiperSlide onClick={listToggle}>
              <img className="shareImg" src={share1}></img>
            </SwiperSlide>
            <SwiperSlide onClick={listToggle}>
              <img className="shareImg" src={share2}></img>
            </SwiperSlide>
            <SwiperSlide onClick={listToggle}>
              <img className="shareImg" src={share3}></img>
            </SwiperSlide>
            <SwiperSlide onClick={listToggle}>
              <img className="shareImg" src={share4}></img>
            </SwiperSlide>
            <SwiperSlide onClick={listToggle}>
              <img className="shareImg" src={share5}></img>
            </SwiperSlide>
            <SwiperSlide onClick={listToggle}>
              <img className="shareImg" src={share5}></img>
            </SwiperSlide>

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
