import "./ShareLinkTab.css";
import { Share_link_form } from "./Share_link_form";
import { Share_link_card } from "./Share_link_card";
import pageButton from "../../assets/pageButton.png";

function ShareLinkTab({ setSelectedProductId, category, productInfo }) {
  // 제품이 선택되지 않은 경우, 렌더링을 방지
  if (!productInfo.productId) {
    return null; // 선택된 제품 정보가 없으면 렌더링되지 않음
  }

  return (
    <section className="ShareLinkTabBoxMom">
      <section className="ShareLinkTabBox">
        <div className="tabTitleBox">
          <li className="tabTitle">나눔신청</li>
          <li className="tabTitleSub">"필요한 가구를 나눔받아보세요. 간단히 신청만 하면 됩니다!"</li>
        </div>
        <section className="shareApply">
          {/* 선택된 제품의 카테고리와 ID를 props로 전달 */}
          <Share_link_card
            category={category}
            productId={productInfo.productId}
          />
          {/* 제품 정보와 카테고리 등을 폼에 전달 */}
          <Share_link_form productInfo={productInfo} />
        </section>
        <div className="pageButtonWrap">
          <img
            src={pageButton}
            alt="페이지 버튼"
            onClick={() => {
              setSelectedProductId(null);
            }} // 카드와 폼을 닫는 기능
          />
        </div>
      </section>
    </section>
  );
}

export default ShareLinkTab;
