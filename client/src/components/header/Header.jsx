import "./Header.css";

function Header() {
  return (
    <section className="headerBox">
      <div className="headerTitle">
        <a href="#mainBox">우드링크</a>
      </div>
      <section className="headAside">
        <aside>
          <div className="headerSubTitle">
            <div className="subTitleBox">
              <a href="#mainBox">메인</a>
            </div>
            <div className="subTitleBox">
              <a href="#ShareLinkBox">나눔링크</a>
            </div>
            <div className="subTitleBox">
              <a href="#reviewBox"> 후기</a>
            </div>
            <div className="subTitleBox aaa">
              <a href="#questionBox">질문</a>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
}

export default Header;
