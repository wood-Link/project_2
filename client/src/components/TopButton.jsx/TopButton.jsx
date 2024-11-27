import React, { useState, useEffect } from "react";

const TopButton = () => {
  // 버튼 표시 여부 상태
  const [showButton, setShowButton] = useState(false);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 위로 가기 함수
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤
    });
  };

  return (
    showButton && (
      <button
        id="topBtn"
        onClick={topFunction}
        style={{
          position: "fixed",
          bottom: "60px" /* 화면 아래 60px */,
          right: "10px" /* 화면 오른쪽 100px */,
          backgroundColor: "#007bff" /* 파란색 배경 */,
          color: "white" /* 텍스트 색상 */,
          border: "none" /* 테두리 없음 */,
          borderRadius: "30px" /* 둥글게 */,
          padding: "10px 20px" /* 버튼 크기 */,
          fontSize: "16px",
          cursor: "pointer" /* 마우스 커서 모양 변경 */,
          zIndex: "100",
        }}
      >
        TOP
      </button>
    )
  );
};

export default TopButton;
