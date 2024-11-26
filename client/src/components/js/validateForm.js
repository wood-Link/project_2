import { ShowAlert } from "../js/AlertUtils";
// 유효성 검사 함수
export const validateForm = (userData) => {
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
