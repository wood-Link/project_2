import React, { useState } from "react";
import "./ReviewForm.css";
import { useParams } from "react-router-dom";
function ReviewForm() {
  const [reviewData, setReviewData] = useState({
    user: "673e9c5d3c176d103a4ed9b4", // 예시 user ID
    product: "673e9c5d3c176d103a4ed9b4", // 예시 product ID
    content: "", // 후기 텍스트
    img: null, // 이미지 파일
  });

  const [imagePreview, setImagePreview] = useState(null); // 이미지 미리보기 상태

  const { deliveryId } = useParams(); //

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
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData 객체를 사용하여 데이터 전송
    const formData = {
      deliveryId: deliveryId, // 신청 ID
      user: reviewData.user, // 유저 ID
      product: reviewData.product, // 상품 ID
      content: reviewData.content, // 작성 내용
      img: reviewData.img ? "review1" : "review2", // 더미 이미지 삽입
      //   img: reviewData.img ? `${reviewData.img}` : null,
    };

    try {
      // 후기 등록에 대한 정확한 접근 필요
      const response = await fetch("https://example.com/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringfy(formData),
      });

      if (!response.ok) {
        throw new Error("서버 오류가 발생했습니다.");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
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
