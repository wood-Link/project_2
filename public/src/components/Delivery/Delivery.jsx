import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowAlert, ShowLoading } from "../js/AlertUtils";
import { MapPin, Phone, User, Search } from "lucide-react";
import { validateForm } from "../js/validateForm";
import { execDaumPostcode } from "../js/execDaumPostcode";
import { handleChange } from "../js/handleChange";
import "./Delivery.css";

const API_BASE_URL = "http://13.236.93.243:8001/api";

const Delivery = () => {
  const [isSending, setIsSending] = useState(false);
  const [networkStatus, setNetworkStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가
  const [userData, setUserData] = useState({
    userName: "",
    userTel: "",
    street: "",
    address: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/user/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const result = await response.json();

        if (result.length < 1) {
          throw new Error("사용자 데이터를 불러올 수 없습니다.");
        }

        const addressData = result[0]?.address || "";
        const splitAddress = addressData.split(",").map((part) => part.trim());

        const [street, address] =
          splitAddress.length >= 2 ? splitAddress : [addressData, ""];

        setUserData({
          userName: result[0]?.name || "",
          userTel: result[0]?.phone || "",
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
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (!validateForm(userData)) return;

    try {
      setIsSending(true);
      ShowLoading("발송 중...");

      const data = {
        name: userData.userName,
        phone: userData.userTel,
        address: `${userData.street} ${userData.address}`,
        url: "www.naver.com",
      };
      // 현재 유저정보 수정으로 들어감 배송지 주소 수정하는 api가 추가되면 수정
      const response = await fetch(`${API_BASE_URL}/user/${data.phone}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok)
        throw new Error("서버로 데이터를 전송하는 데 실패했습니다.");

      const result = await response.json();
      ShowAlert("success", "성공", "메시지가 성공적으로 전송되었습니다.");
    } catch (error) {
      ShowAlert(
        "error",
        "실패",
        error.message || "메시지 전송에 실패했습니다."
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

          <div className="address-search-section">
            <div className="input-with-icon">
              <MapPin />
              <button
                type="button"
                className="address-search-button"
                onClick={() => execDaumPostcode(setUserData)}
              >
                <Search /> 우편번호 찾기
              </button>
            </div>
            <input
              className="inputBox inputSize"
              type="text"
              name="street"
              value={userData.street}
              onChange={handleChange}
              placeholder="주소 (도로명)"
              readOnly
              onClick={() => execDaumPostcode(setUserData)}
            />
            <input
              className="inputBox inputSize"
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
        </form>
      </div>
    </div>
  );
};

export default Delivery;
