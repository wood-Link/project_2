import React, { useEffect, useState } from "react";
import "./Teg.css";

function Teg() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 8); // 총 8개의 아이템이므로 8로 나눔
    }, 2000); // 0.5초마다 다음 아이템 활성화

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="tegBoxBack">
        <section className="tegBox">
          <div className="container">
            {/*  PC 버전: 첫 번째 행 (4개 아이템) */}

            <div className="row pc">
              <div className={`item ${activeIndex === 0 ? "blink" : ""}`}>
                <p>#무료나눔</p>
              </div>
              <div className={`item ${activeIndex === 1 ? "blink" : ""}`}>
                <p>#가구입양</p>
              </div>
              <div className={`item ${activeIndex === 2 ? "blink" : ""}`}>
                <p>#나무사랑</p>
              </div>
              <div className={`item ${activeIndex === 3 ? "blink" : ""}`}>
                <p>#합리적인</p>
              </div>
            </div>
            <div className="row pc">
              <div className={`item ${activeIndex === 4 ? "blink" : ""}`}>
                <p>#환경보호</p>
              </div>
              <div className={`item ${activeIndex === 5 ? "blink" : ""}`}>
                <p>#스크래치</p>
              </div>
              <div className={`item ${activeIndex === 6 ? "blink" : ""}`}>
                <p>#수제제품</p>
              </div>
              <div className={`item ${activeIndex === 7 ? "blink" : ""}`}>
                <p>#자립청년</p>
              </div>
            </div>

            {/*  태블릿 및 모바일 버전: 첫 번째 행 (3개 아이템) */}
            <div className="row tablet-mobile">
              <div className={`item ${activeIndex === 0 ? "blink" : ""}`}>무료나눔</div>
              <div className={`item ${activeIndex === 1 ? "blink" : ""}`}>가구입양</div>
              <div className={`item ${activeIndex === 2 ? "blink" : ""}`}>나무사랑</div>
            </div>

            {/* 태블릿 및 모바일 버전: 가운데 행 (2개 아이템 중앙 정렬)  */}
            <div className="row tablet-mobile center">
              <div className={`item ${activeIndex === 3 ? "blink" : ""}`}>합리적인</div>
              <div className={`item ${activeIndex === 4 ? "blink" : ""}`}>환경보호</div>
            </div>

            {/*  태블릿 및 모바일 버전: 세 번째 행 (3개 아이템) */}
            <div className="row tablet-mobile">
              <div className={`item ${activeIndex === 5 ? "blink" : ""}`}>스크래치</div>
              <div className={`item ${activeIndex === 6 ? "blink" : ""}`}>수제제품</div>
              <div className={`item ${activeIndex === 7 ? "blink" : ""}`}>자립청년</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Teg;
