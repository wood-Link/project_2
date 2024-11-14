import { useState } from "react";
import "./ShareLinkTab.css";
import { Share_link_form } from "./Share_link_form";
import { Share_link_card } from "./Share_link_card";

function ShareLinkTab() {
  const [userData, setUserData] = useState({
    userName: "",
    userTel: "",
    street: "",
    address: "",
    isSending: false,
  });

  return (
    <section className="ShareLinkTabBoxMom">
      <section className="ShareLinkTabBox">
        <div className="tabTitleBox">
          <li className="tabTitle">나눔신청</li>
        </div>
        <section className="shareApply">
          <Share_link_card />
          <Share_link_form userData={userData} setUserData={setUserData} />
        </section>
      </section>
    </section>
  );
}

export default ShareLinkTab;
