import "./ShareLinkTab.css";
import { Share_link_form } from "./Share_link_form";
import { Share_link_card } from "./Share_link_card";
import pageButton from "../../assets/pageButton.png";

function ShareLinkTab({ setContents, category, productInfo }) {
  return (
    <section className="ShareLinkTabBoxMom">
      <section className="ShareLinkTabBox">
        <div className="tabTitleBox">
          <li className="tabTitle">나눔신청</li>
        </div>
        <section className="shareApply">
          {/* 제품을 호출하기 위해 카테고리와 제품의 아이디를 전달함 */}
          <Share_link_card
            category={category}
            productId={productInfo.productId}
          />
          {/* 제품의 이름과 공방명을 전달 */}
          <Share_link_form productData={productInfo} />
        </section>
        <div className="pageButtonWrap">
          <img
            src={pageButton}
            alt="페이지 버튼"
            onClick={() => setContents(false)}
          />
        </div>
      </section>
    </section>
  );
}

export default ShareLinkTab;
