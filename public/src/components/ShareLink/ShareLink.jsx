import "./ShareLink.css";
import { useState } from "react";
// import logo from "../../assets/img/1_1.jpg";

function ShareLink() {
  const [selectedTab, setSelectedTab] = useState("first");
  const handleChange = (event) => {
    setSelectedTab(event.target.id);
  };

  return (
    <section className="ShareLinkBoxMom">
      <section className="ShareLinkBox">
        <div className="titleBox">
          <li className="title">나눔링크</li>
          <li className="subTitle">공방 사장님들의 스크래치, 리퍼브 제품들을 나눔해요 </li>
        </div>
        <section className="aside">
          <aside>
            <input id="first" type="radio" name="tab" checked={selectedTab === "first"} onChange={handleChange} />
            <input id="second" type="radio" name="tab" checked={selectedTab === "second"} onChange={handleChange} />
            <input id="third" type="radio" name="tab" checked={selectedTab === "third"} onChange={handleChange} />
            <input id="fourth" type="radio" name="tab" checked={selectedTab === "fourth"} onChange={handleChange} />
            <input id="fifth" type="radio" name="tab" checked={selectedTab === "fifth"} onChange={handleChange} />
            <div className="buttons">
              <label htmlFor="first">책상</label>
              <label htmlFor="second">의자</label>
              <label htmlFor="third">소모품</label>
              <label htmlFor="fourth">식탁</label>
              <label htmlFor="fifth">기타</label>
            </div>
            <section className="tab_item" id="tab_item1">
              {/* <img className="tabImg" src={logo}></img> */}
              <li>책상</li>
            </section>
            <section className="tab_item" id="tab_item2">
              <li>의자</li>
            </section>
            <section className="tab_item" id="tab_item3">
              <li>소모품</li>
            </section>
            <section className="tab_item" id="tab_item4">
              <li>식탁</li>
            </section>
            <section className="tab_item" id="tab_item5">
              <li>기타</li>
            </section>
          </aside>
        </section>
      </section>
    </section>
  );
}

export default ShareLink;
