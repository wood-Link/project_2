import "./Card.css";
function Card({ img, title, name, review, data }) {
  return (
    <>
      <div className="review_card">
        <div className="cardBox">
          <div className="review_card_inner">
            <img src={img} alt="가구이미지" className="review_card_img" />
          </div>
          <div className="review_card_title">{title}</div>
          <div className="review_card_name">{name}</div>
          <div className="review_card_review">{review}</div>
        </div>
      </div>
      {/* <div className="review_card">
  <div className="cardBox">
    <div className="review_card_inner">
      <img
         src={`../../../assets/img/${data.img}.jpg`}
     
        alt={data?.img ? "리뷰 이미지" : "이미지 없음"}
        className="review_card_img"
      />
    </div>
    <div className="review_card_title">{data?.title || "제목 없음"}</div>
    <div className="review_card_name">{data?.name || "익명"}</div>
    <div className="review_card_review">{data?.review || "리뷰가 없습니다."}</div>
  </div>
</div>
 */}
    </>
  );
}
export default Card;
