import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowAlert, ShowLoading } from "../js/AlertUtils";
import Swal from "sweetalert2";
import { MapPin, Phone, User, Search } from "lucide-react";
import { validateForm } from "../js/validateForm";
import "./Delivery.css";
import Modal from "../Modal/Modal";
import DaumPostcodeEmbed from "react-daum-postcode";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const Delivery = () => {
  const [isSending, setIsSending] = useState(false);
  const [networkStatus, setNetworkStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가
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
  };

  const { id } = useParams();

  // state에 인풋값 넣는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // 카카오톡 인 앱 닫는 알림창
  function ShowAlertEnd(icon, title, html, useTimer = true) {
    const options = {
      icon,
      title,
      html,
      confirmButtonText: "확인",
      customClass: {
        confirmButton: "swal2-confirm",
      },
    };

    // Swal.fire() 호출 및 Promise 반환
    return Swal.fire(options).then((result) => {
      if (result.isConfirmed) {
        // 확인 버튼을 눌렀을 때 실행할 동작
        location.href = "kakaotalk://inappbrowser/close";
      } else if (result.isDismissed) {
        // 모달이 자동으로 닫혔거나, 사용자가 취소한 경우 실행할 동작
        location.href = "kakaotalk://inappbrowser/close";
      }
    });
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/apply/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const result = await response.json();
        console.log(result);
        if (result.length < 1) {
          throw new Error("사용자 데이터를 불러올 수 없습니다.");
        }

        const addressData = result[0]?.sendto || "";
        const splitAddress = addressData.split(", ").map((part) => part.trim());

        const [street, address] =
          splitAddress.length >= 2 ? splitAddress : [addressData, ""];

        setUserData({
          userName: result[0]?.user.name || "",
          userTel: result[0]?.user.phone || "",
          street: street,
          address: address,
        });
        setNetworkStatus("success");
      } catch (error) {
        setErrorMessage(error.message || "알 수 없는 오류가 발생했습니다.");
        setNetworkStatus("error");
      }
    };

    fetchData();
  }, []);

  // 배송지 수정 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (!validateForm(userData)) return;

    try {
      setIsSending(true);
      ShowLoading("발송 중...");

      const data = {
        id: id,
        name: userData.userName.trim(),
        phone: userData.userTel.trim(),
        address: `${userData.street.trim()}`,
        detailedAddress: ` ${userData.address.trim()}`,
        url: "www.naver.com",
      };
      // 현재 유저정보 수정으로 들어감 배송지 주소 수정하는 api가 추가되면 수정
      // body에 유저 id를 넣어서 사용
      const response = await fetch(`${API_BASE_URL}/apply/change`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok)
        throw new Error("서버로 데이터를 전송하는 데 실패했습니다.");

      const result = await response.json();
      ShowAlertEnd("success", "성공", "배송지 수정이 완료되었습니다.");
    } catch (error) {
      ShowAlertEnd(
        "error",
        "실패",
        error.message || "배송지 수정에 실패했습니다."
      );
    } finally {
      setIsSending(false);
    }
  };

  if (networkStatus === "loading") {
    return (
      <div className="shipping-address-container">
        <div>
          <div className="shipping-address-header">
            <h1>배송지 수정</h1>
          </div>
          <div>로딩중...</div>
        </div>
      </div>
    );
  }

  if (networkStatus === "error") {
    return (
      <div className="shipping-address-container">
        <div>
          <div className="shipping-address-header">
            <h1>배송지 수정</h1>
          </div>
          <div className="error-message">
            <p>서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
            <p>오류 메시지: {errorMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shipping-address-container">
      <div>
        <div className="shipping-address-header">
          <h1>배송지 수정</h1>
        </div>
        <form onSubmit={handleSubmit} className="shipping-address-form">
          <div className="input-with-icon">
            <User />
            <input
              type="text"
              name="userName"
              className="inputSize"
              value={userData.userName}
              onChange={handleChange}
              placeholder="받는 사람"
              maxLength={40}
            />
          </div>

          <div className="input-with-icon">
            <MapPin />
            <button
              type="button"
              className="address-search-button"
              onClick={toggleModal}
            >
              <Search /> 주소 찾기
            </button>
          </div>
          <div className="input-with-icon">
            <MapPin style={{ visibility: "hidden" }} />

            <input
              className=" inputSize"
              type="text"
              name="street"
              value={userData.street}
              onChange={handleChange}
              placeholder="주소 (도로명)"
              readOnly
              onClick={toggleModal}
            />
          </div>
          <div className="input-with-icon">
            <MapPin style={{ visibility: "hidden" }} />

            <input
              className=" inputSize"
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              placeholder="상세주소"
              maxLength={150}
            />
          </div>

          <div className="input-with-icon">
            <Phone />
            <input
              type="tel"
              name="userTel"
              className="inputSize"
              value={userData.userTel}
              onChange={handleChange}
              placeholder="휴대폰 번호"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="save-button">
              배송지 수정
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
      </div>
    </div>
  );
};

export default Delivery;
