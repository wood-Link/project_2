import "./ShareLink.css";
import { useState } from "react";
// import logo from "../../assets/img/1_1.jpg";

function ShareLink() {
  const [selectedTab, setSelectedTab] = useState({
    desk: false,
    chair: false,
    expendables: false,
    table: false,
    etc: false,
  });
  const handleChange = (event) => {
    setSelectedTab(event.target.id);
  };

  return (
    <main className="ShareLinkBoxMom">
      <div className="ShareLinkBox">
        <section className="titleBox">
          <li className="title">나눔링크</li>
          <li className="subTitle">
            공방 사장님들의 스크래치, 리퍼브 제품들을 나눔해요{" "}
          </li>
        </section>
        <section className="aside">
          <aside>
            <div className="buttons">
              <div>책상</div>
              <div>의자</div>
              <div>소모품</div>
              <div>식탁</div>
              <div>기타</div>
            </div>
          </aside>
        </section>
        <section className="ShareLinkList">{/* 리스트 들어갈 자리 */}</section>
      </div>
    </main>
  );
}

export default ShareLink;
