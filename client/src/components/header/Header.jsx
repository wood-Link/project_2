import React from "react";
import "./Header.css";

function Header() {
  // 스크롤 함수
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // 기본 a 태그 동작 (페이지 이동) 방지

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤
        block: "start", // 스크롤을 요소의 시작 부분에 맞춤
      });
    }
  };

  return (
    <section className="headerBox">
      <div className="headerTitle">
        <a href="#mainBox" onClick={(e) => scrollToSection(e, "mainBox")}>
          우드링크
        </a>
      </div>
      <section className="headAside">
        <aside>
          <div className="headerSubTitle">
            <div className="subTitleBox">
              <a href="#mainBox" onClick={(e) => scrollToSection(e, "mainBox")}>
                메인
              </a>
            </div>
            <div className="subTitleBox">
              <a
                href="#reviewBox"
                onClick={(e) => scrollToSection(e, "reviewBox")}
              >
                후기
              </a>
            </div>
            <div className="subTitleBox">
              <a
                href="#ShareLinkBox"
                onClick={(e) => scrollToSection(e, "ShareLinkBox")}
              >
                나눔링크
              </a>
            </div>
            <div className="subTitleBox ">
              <a
                href="#questionBox"
                onClick={(e) => scrollToSection(e, "questionBox")}
              >
                질문
              </a>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
}

export default Header;
