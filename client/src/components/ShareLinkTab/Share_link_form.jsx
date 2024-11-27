import { ShowAlert, ShowLoading } from "../js/AlertUtils";
import { useState } from "react";
import { validateForm } from "../js/validateForm";
import Information from "../Information/Information";
import Modal from "../Modal/Modal";
import DaumPostcodeEmbed from "react-daum-postcode";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
export function Share_link_form({ productInfo }) {
  const [isSending, setIsSending] = useState(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  const [showPrivacyWarning, setShowPrivacyWarning] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    userTel: "",
    street: "",
    address: "",
    detailedAddress: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 모달 토글 함수
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log("modal");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 개인정보 동의 체크 확인

    if (isSending) return;

    if (!validateForm(userData)) return;

    if (!isPrivacyAgreed) {
      setShowPrivacyWarning(true);
      ShowAlert("warning", "알림", "개인정보 수집에 동의해주세요.");
      return;
    }
    setShowPrivacyWarning(false);

    try {
      setIsSending(true);
      ShowLoading("발송 중...");

      const data = {
        name: userData.userName.trim(),
        phone: userData.userTel.trim(),
        workshop: productInfo.workshop,
        product: productInfo.name,
        productId: productInfo.productId,
        address: userData.street.trim(),
        detailedAddress: userData.address.trim(),
        url: "www.naver.com",
      };

      const response = await fetch(`${API_BASE_URL}/apply`, {
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
      setIsSending(false);
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
        onClick={toggleModal}
      >
        <button className="adressButton" type="button" onClick={toggleModal}>
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
        <li className="InformationPadding">
          <Information setIsAgreed={setIsPrivacyAgreed} />
        </li>
        {showPrivacyWarning && <div className="privacy-warning"></div>}
        <button className="compum" type="submit" disabled={isSending}>
          {isSending ? "전송 중..." : "신청하기"}
        </button>
      </div>
      <Modal toggleModal={toggleModal} isModalOpen={isModalOpen}>
        <DaumPostcodeEmbed
          onComplete={(data) => {
            // 선택된 도로명 주소를 userData에 저장
            setUserData((prev) => ({
              ...prev,
              street: data.roadAddress, // 도로명 주소
            }));
            toggleModal(); // 주소 선택 후 모달 닫기
          }}
        />
      </Modal>
    </form>
  );
}

// 인풋태그 컴포넌트는 동일하게 유지
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
