import React, { useState } from "react";
import { MapPin, Phone, User, Search } from "lucide-react";
import "./Delivery.css";

const Delivery = () => {
  const [recipientName, setRecipientName] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDefaultAddress, setIsDefaultAddress] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("주소 저장:", {
      recipientName,
      address,
      addressDetail,
      phoneNumber,
      isDefaultAddress,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("주소 삭제");
  };

  const handleZipcodeSearch = () => {
    console.log("우편번호 찾기");
  };

  return (
    <div className="shipping-address-container">
      <div>
        <div className="shipping-address-header">
          <h1>배송지 수정</h1>
        </div>

        <form onSubmit={handleSubmit} className="shipping-address-form">
          {/* 받는 사람 입력 */}
          <div className="input-with-icon">
            <User />
            <input type="text" className="inputSize" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} placeholder="받는 사람" maxLength={40} />
          </div>

          {/* 주소 입력 */}
          <div className="address-search-section">
            <div className="input-with-icon">
              <MapPin />
              <button type="button" className="address-search-button" onClick={handleZipcodeSearch}>
                <Search /> 우편번호 찾기
              </button>
            </div>
            <input className="inputBox inputSize" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="주소" readOnly />
            <input className="inputBox inputSize" type="text" value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)} placeholder="상세주소" maxLength={150} />
          </div>

          {/* 연락처 입력 */}
          <div className="input-with-icon">
            <Phone />
            <input type="tel" className="inputSize" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="휴대폰 번호" />
          </div>

          {/* 기본 배송지 선택
          <div className="default-address-container">
            <input type="checkbox" id="defaultAddress" checked={isDefaultAddress} onChange={(e) => setIsDefaultAddress(e.target.checked)} />
            <label htmlFor="defaultAddress" className="default-address-label">
              기본 배송지로 선택
            </label>
          </div> */}

          {/* 버튼 */}
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
