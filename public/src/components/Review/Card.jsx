import "./Card.css";
function Card({ img, title, name, review }) {
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
    </>
  );
}
export default Card;
