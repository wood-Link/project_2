import React, { useState } from "react";
import "./ReviewForm.css";
import { ShowAlert, ShowLoading } from "../js/AlertUtils";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
function ReviewForm() {
  const [reviewData, setReviewData] = useState({
    content: "", // 후기 텍스트
    img: null, // 이미지 파일
  });
  const [isSending, setIsSending] = useState(false);

  const [imagePreview, setImagePreview] = useState(null); // 이미지 미리보기 상태

  const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
  const { applyId } = useParams(); //

  // 후기 텍스트 입력 핸들러
  const handleTextChange = (e) => {
    setReviewData((prevData) => ({
      ...prevData,
      content: e.target.value,
    }));
  };

  // 이미지 파일 선택 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReviewData((prevData) => ({
        ...prevData,
        img: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // 이미지 미리보기 URL 생성
      };
      reader.readAsDataURL(file); // 파일을 base64로 변환
    }
  }; // 카카오톡 인 앱 닫는 알림창
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

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    // FormData 객체를 사용하여 데이터 전송
    const formData = {
      applyId: applyId, // 신청 ID
      content: reviewData.content, // 작성 내용
      img: reviewData.img ? "review1" : "review2", // 더미 이미지 삽입
      //   img: reviewData.img ? `${reviewData.img}` : null,
    };

    try {
      setIsSending(true);
      ShowLoading("발송 중...");

      // 후기 등록에 대한 정확한 접근 필요
      const response = await fetch(`${API_BASE_URL}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("서버 오류가 발생했습니다.");
      }

      ShowAlertEnd("success", "성공", "후기 작성이 완료되었습니다.");
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      ShowAlertEnd(
        "error",
        "실패",
        error.message || "후기 작성에 실패했습니다."
      );
      console.error("Error:", error);
      // 에러 처리 (예: 사용자에게 알림 표시)
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="review-form">
        <div className="review-input">
          <label htmlFor="reviewText">후기 작성</label>
          <textarea
            id="reviewText"
            value={reviewData.content}
            onChange={handleTextChange}
            placeholder="후기를 작성해주세요."
            rows="4"
          />
        </div>

        <div className="image-upload">
          <label htmlFor="imageUpload">이미지 업로드</label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="이미지 미리보기" />
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">
          제출
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
