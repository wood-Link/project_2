import "./Review_Card.css";
import images from "../js/images.js";
function Review_Card({ data }) {
  return (
    <>
      <div className="review_card">
        <div className="cardBox">
          <div className="review_card_inner">
            <img
              src={images[`${data.img}.jpg`] || data.name}
              alt={data?.img ? "리뷰 이미지" : "이미지 없음"}
              className="review_card_img"
            />
          </div>
          <div className="review_card_title">
            {data?.workshop || "내용 없음"} / {data?.product || "내용 없음"}
          </div>
          <div className="review_card_line"></div>
          <div className="review_card_name">{data?.user || "내용 없음"}</div>
          <div className="review_card_review">
            {data?.content || "리뷰가 없습니다."}
          </div>
        </div>
      </div>
    </>
  );
}
export default Review_Card;
