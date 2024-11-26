import React, { useState } from "react";
import "./information.css";

const Information = ({ setIsAgreed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    setIsChecked(true);
    setIsModalOpen(false);
    setIsAgreed(true);
  };

  const handleDisagree = () => {
    setIsChecked(false);
    setIsModalOpen(false);
    setIsAgreed(false);
  };

  const handleCheckboxChange = () => {
    setIsModalOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className.includes("modal-overlay")) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="privacy-container">
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          id="privacy"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="privacy-checkbox"
        />
        <label htmlFor="privacy" className="privacy-label">
          개인정보 수집 및 이용동의
        </label>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-container">
            <div className="modal-header">
              <h2 className="modal-title">개인정보 수집 및 이용동의</h2>
            </div>

            <div className="modal-content">
              <div className="content-section">
                <h3 className="section-title">1. 수집하는 개인정보 항목</h3>
                <p className="section-text">
                  - 필수항목: 이름, 연락처, 배송주소
                </p>
              </div>

              <div className="content-section">
                <h3 className="section-title">
                  2. 개인정보의 수집 및 이용목적
                </h3>
                <p className="section-text">
                  - 상품 주문 및 배송을 위한 정보 확인
                  <br />
                  - 구매자와 판매자 간의 원활한 의사소통
                  <br />- 상품 배송 및 서비스 제공
                </p>
              </div>

              <div className="content-section">
                <h3 className="section-title">
                  3. 개인정보의 보유 및 이용기간
                </h3>
                <p className="section-text">
                  개인정보는 3년간 보관됩니다. 3년이 경과한 후에는 개인정보가
                  자동으로 삭제되며, 법적 의무 이행을 위해 필요한 경우에는 일정
                  기간 보유할 수 있습니다.
                </p>
              </div>

              <div className="content-section">
                <h3 className="section-title">4. 동의 거부</h3>
                <p className="section-text">
                  이용자는 개인정보 제공에 동의하지 않으실 수 있습니다. 단,
                  동의하지 않으실 경우 서비스 이용에 제한이 있을 수 있습니다.
                </p>
              </div>
            </div>

            <div className="button-container">
              <button
                onClick={handleDisagree}
                className="button button-disagree"
              >
                동의하지 않음
              </button>
              <button onClick={handleAgree} className="button button-agree">
                동의
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
