import Swal from "sweetalert2";
import { ShowAlert, ShowLoading } from "./AlertUtils";

// Share_link_form 컴포넌트
export function Share_link_form({ userData, setUserData }) {
  // 폼 제출 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.isSending) return;

    // 필수 입력값 확인
    if (!userData.userName || userData.userName.length < 2)
      return ShowAlert("info", "알림", "이름은 2글자 이상 입력해 주세요.");
    if (!userData.userTel)
      return ShowAlert("info", "알림", "전화번호를 입력해 주세요.");
    const phoneRegex = /^(010|011)[0-9]{8,9}$/;
    if (!phoneRegex.test(userData.userTel)) {
      return ShowAlert("info", "알림", "올바른 전화번호 형식을 입력해 주세요.");
    }
    if (!userData.street)
      return ShowAlert("info", "알림", "도로명주소를 입력해 주세요.");
    if (!userData.address)
      return ShowAlert("info", "알림", "상세주소를 입력해 주세요.");

    setUserData((prevData) => ({ ...prevData, isSending: true }));
    ShowAlert("success", "성공", "메시지가 성공적으로 전송되었습니다.");

    setUserData((prevData) => ({ ...prevData, isSending: false }));
    console.log("전송 완료");
  };

  // 상태 업데이트 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value, // name 속성에 맞는 필드 업데이트
    }));
  };

  // 주소 검색 후 호출될 함수
  const execDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        // 도로명 주소와 상세주소를 상태에 업데이트
        setUserData((prevData) => ({
          ...prevData,
          street: data.roadAddress,
        }));
      },
    }).open();
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
        onChange={handleInputChange} // 주소를 입력하는 필드에도 onChange 처리
        id={"roadAddress"}
        read={true} // readOnly 속성 유지
        onClick={execDaumPostcode}
      >
        <button type="button" onClick={execDaumPostcode}>
          주소 찾기
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
        {/* 모달로 동의창을 띄워야 할듯 */}
        <button className="compum" type="submit">
          신청하기
        </button>
      </div>
    </form>
  );
}

// Input 컴포넌트
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
          value={value} // value 속성으로 상태와 연결
          onChange={onChange} // onChange 이벤트 핸들러로 상태 업데이트
          id={id ? id : null}
          readOnly={read} // readOnly 속성 유지
          onClick={onClick}
        />
      </div>
    </div>
  );
}
