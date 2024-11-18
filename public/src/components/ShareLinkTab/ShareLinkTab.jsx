import { useState } from "react";
import "./ShareLinkTab.css";
import { Share_link_form } from "./Share_link_form";
import { Share_link_card } from "./Share_link_card";
import pageButton from "../../assets/pageButton.png";
import dummyData from "../ShareLink/dummyData";

function ShareLinkTab({ setContents, productId, category }) {
  const [userData, setUserData] = useState({
    userName: "",
    userTel: "",
    street: "",
    address: "",
  });

  const productData = dummyData[category][productId];
  console.log(dummyData[category][productId]);
  return (
    <section className="ShareLinkTabBoxMom">
      <section className="ShareLinkTabBox">
        <div className="tabTitleBox">
          <li className="tabTitle">나눔신청</li>
        </div>
        <section className="shareApply">
          <Share_link_card product={productData} />
          <Share_link_form
            userData={userData}
            setUserData={setUserData}
            productData={productData}
          />
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
