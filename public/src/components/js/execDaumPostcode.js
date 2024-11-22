// 카카오 검색 api 함수
export const execDaumPostcode = (setUserData) => {
  new window.daum.Postcode({
    oncomplete: function (data) {
      setUserData((prevData) => ({
        ...prevData,
        street: data.roadAddress,
      }));
    },
  }).open();
};
