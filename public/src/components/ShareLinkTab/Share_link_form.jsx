import Swal from "sweetalert2";
import { ShowAlert, ShowLoading } from "./AlertUtils";
import { useState } from "react";

export function Share_link_form({ productInfo }) {
  const [isSending, setIsSending] = useState(false); // 전송 상태 관리
  const [userData, setUserData] = useState({
    userName: "",
    userTel: "",
    street: "",
    address: "",
  });
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

  // 폼에서 입력 된 데이터 받아오는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 폼 제출 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; // 전송 중에는 다시 제출되지 않도록

    // 필수 입력값 확인 함수
    if (!validateForm()) return;

    // 주소지와 상세주소 입력값 결합
    const joinAdress = userData.street + userData.address;

    try {
      setIsSending(true); // 전송 시작
      ShowLoading("발송 중...");

      const data = {
        name: userData.userName, // 고객명
        phone: userData.userTel, //전화번호
        workshop: productInfo.workshop, // 공방 이름
        product: productInfo.name, // 제품 명
        address: joinAdress, // 배송 주소
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
        onChange={handleInputChange}
      />
      <Input
        title={"전화번호"}
        text={"전화번호를 입력해주세요."}
        name="userTel"
        value={userData.userTel}
        onChange={handleInputChange}
      />
      <Input
        title={"도로명주소"}
        text={"도로명주소를 입력해주세요."}
        name="street"
        value={userData.street}
        onChange={handleInputChange}
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
        onChange={handleInputChange}
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

// 유효성 검사 함수
const validateForm = () => {
  if (!userData.userName || userData.userName.length < 2) {
    ShowAlert("info", "알림", "이름은 2글자 이상 입력해 주세요.");
    return false;
  }
  if (!userData.userTel) {
    ShowAlert("info", "알림", "전화번호를 입력해 주세요.");
    return false;
  }
  const phoneRegex = /^(010|011)[0-9]{8,9}$/;
  if (!phoneRegex.test(userData.userTel)) {
    ShowAlert("info", "알림", "올바른 전화번호 형식을 입력해 주세요.");
    return false;
  }
  if (!userData.street) {
    ShowAlert("info", "알림", "도로명주소를 입력해 주세요.");
    return false;
  }
  if (!userData.address) {
    ShowAlert("info", "알림", "상세주소를 입력해 주세요.");
    return false;
  }
  return true; // 모든 검증 통과 시 true 반환
};
