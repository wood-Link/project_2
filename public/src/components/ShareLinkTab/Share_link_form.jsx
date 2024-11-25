import { ShowAlert, ShowLoading } from "../js/AlertUtils";
import { useState } from "react";
import { validateForm } from "../js/validateForm";

export function Share_link_form({ productInfo }) {
  const [isSending, setIsSending] = useState(false); // 전송 상태 관리
  const [userData, setUserData] = useState({
    userName: "", // 받는 사람 이름
    userTel: "", // 전화번호
    street: "", // 도로명주소
    address: "", // 상세주소
  });

  // state에 인풋값 넣는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 카카오 검색 api 함수
  const execDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setUserData((prevData) => ({
          ...prevData,
          street: data.roadAddress,
        }));
      },
    }).open();
  };

  // 폼 제출 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; // 전송 중에는 다시 제출되지 않도록

    // 필수 입력값 확인 함수
    if (!validateForm(userData)) return;

    try {
      setIsSending(true); // 전송 시작
      ShowLoading("발송 중...");

      const data = {
        name: userData.userName, // 고객명
        phone: userData.userTel, //전화번호
        workshop: productInfo.workshop, // 공방 이름
        product: productInfo.name, // 제품 명
        address: userData.street + userData.address, // 배송 주소
        url: "www.naver.com", // 테스트용 url
      };

      const response = await fetch("http://13.236.93.243:8001/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      console.log("서버 응답", result);
      ShowAlert("success", "성공", "메시지가 성공적으로 전송되었습니다.");
    } catch (error) {
      console.error("Error:", error);
      ShowAlert("error", "실패", "메시지 전송에 실패했습니다.");
    } finally {
      setIsSending(false); // 전송 완료 후 상태 리셋
    }
  };

  return (
    <form className="shareTabApply" onSubmit={handleSubmit}>
      <Input
        title={"이름"}
        text={"이름을 입력해주세요."}
        name="userName"
        value={userData.userName}
        onChange={handleChange}
      />
      <Input
        title={"전화번호"}
        text={"전화번호를 입력해주세요."}
        name="userTel"
        value={userData.userTel}
        onChange={handleChange}
      />
      <Input
        title={"도로명주소"}
        text={"도로명주소를 입력해주세요."}
        name="street"
        value={userData.street}
        onChange={handleChange}
        read={true}
        onClick={execDaumPostcode}
      >
        <button
          className="adressButton"
          type="button"
          onClick={execDaumPostcode}
        >
          주소찾기
        </button>
      </Input>
      <Input
        title={"상세주소"}
        text={"상세주소를 입력해주세요."}
        name="address"
        value={userData.address}
        onChange={handleChange}
      />
      <div className="agree">
        <li>개인정보 동의</li>
        <button className="compum" type="submit" disabled={isSending}>
          {isSending ? "전송 중..." : "신청하기"}
        </button>
      </div>
    </form>
  );
}

// 인풋태그 컴포넌트
function Input({
  title,
  text,
  name,
  value,
  onChange,
  children,
  id,
  read,
  onClick,
}) {
  return (
    <div className="inputName">
      <div className="postTest">
        <div className="inputTitle">{title}</div>
        {children}
      </div>
      <div>
        <input
          className="inputText"
          type="text"
          placeholder={text}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          readOnly={read}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
