// import { Children } from "react";
import { Children } from "react";
import "./ShareLinkTab.css";

function ShareLinkTab() {
  function Input({ title, text, children }) {
    return (
      <>
        <div className="inputName">
          <div className="postTest">
            <div className="inputTitle">{title}</div>
            {children}
          </div>
          <div>
            <input className="inputText" type="text" placeholder={text} />
          </div>
        </div>
      </>
    );
  }
  return (
    <section className="ShareLinkTabBoxMom">
      <section className="ShareLinkTabBox">
        <div className="tabTitleBox">
          <li className="tabTitle">나눔신청</li>
        </div>
        <section className="test">
          <section className="shareApply">
            <div className="shareTab">
              <div className="shareTabImg">이미지</div>
              <div className="shareTabExplain">
                <strong className="textTitle">XX공방 / XX가구</strong>
                <li className="test">원가 : 80만원 / 나눔가격 : 20만원</li>
                <li>나눔사유 : 오른쪽 다리 찍힘 자국</li>
                <li>1000 * 400 * 600 (가로/세로/높이 단위:mm)</li>
              </div>
            </div>
            <form className="shareTabApply">
              <Input title={"이름"} text={"이름을 입력해주세요."} />
              <Input title={"전화번호"} text={"전화번호를 입력해주세요."} />
              <Input title={"우편번호"} text={"우편번호를 입력해주세요."}>
                <button>우편번호 찾기</button>
              </Input>
              <Input title={"상세주소"} text={"상세주소를 입력해주세요."} />
              <div className="agree">
                <li>개인정보 동의</li>
                <button className="compum" type="submit">
                  신청하기
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ShareLinkTab;
