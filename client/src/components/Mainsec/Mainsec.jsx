import "./Mainsec.css";
import main1 from "../../assets/img/main_img1.jpg";
import main2 from "../../assets/img/main_img2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Swiper.css";

function Main() {
  return (
    <section className="mainBox" id="mainBox">
      <Swiper
        spaceBetween={50} // 슬라이드 간의 공간
        slidesPerView={1} // 한번에 보여지는 슬라이드 개수
        navigation // 이전/다음 네비게이션 버튼 추가
        pagination={{ clickable: true }} // 페이지네이션 (동그라미 버튼) 활성화
        loop={true} // 무한 루프 슬라이드
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="mainImg">
            {<img className="tabImg" src={main1}></img>}
          </div>
          <div className="mainText" id="mainText1">
            실용성 있는 원목가구를
            <br /> 나눔 받고 싶으신가요?
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mainImg">
            {<img className="tabImg" src={main2}></img>}
          </div>
          <div className="mainText" id="mainText3">
            버려지는 가구들을 나눔받아
            <br /> 환경보호에 기여하고 싶지 않으신가요?
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Main;
