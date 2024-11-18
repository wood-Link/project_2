import dummyData from "../ShareLink/dummyData";

export function Share_link_card({ category, productId }) {
  const product = dummyData[category][productId];

  return (
    <div className="shareTab">
      <div className="shareTabImg">
        <img src={product.img} alt="이미지" />
      </div>
      <div className="shareTabExplain">
        <strong className="textTitle">
          {product.location} /{product.name}
        </strong>
        <li className="test">
          원가 : {product.cost} / 나눔가격 : {product.price}
        </li>
        <li>나눔사유 : {product.reason}</li>
        <li>{product.size.join(" * ")} (가로/세로/높이 단위:mm)</li>
      </div>
    </div>
  );
}
