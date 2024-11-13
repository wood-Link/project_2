import { useState } from "react";
import "./Question.css";

export default function Question() {
  const [state, setState] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  function toggle(num) {
    setState((prevState) => ({
      ...prevState,
      [num]: !prevState[num],
    }));
  }

  return (
    <div className="question_wrap">
      <section className="question">
        <div className="question_title">자주묻는 질문</div>
        <div className="question_text">
          고객님들께서 자주 물어보시는 내용을 정리했어요
        </div>
        <div className="question_list">
          <div className="question_contents">
            <div className="question_contents_text" onClick={() => toggle(1)}>
              배송 평균기간이 어떻게 되나요?
            </div>
            <div
              className={`question_contents_text_hidden ${
                state[1] ? "text_active" : ""
              }`}
            >
              숨어있지롱
            </div>
          </div>
          <div className="question_contents">
            <div className="question_contents_text" onClick={() => toggle(2)}>
              신청 방법이 어떻게 되나요?
            </div>
            <div
              className={`question_contents_text_hidden ${
                state[2] ? "text_active" : ""
              }`}
            >
              신청 방법에 대한 설명
            </div>
          </div>
          <div className="question_contents">
            <div className="question_contents_text" onClick={() => toggle(3)}>
              주소를 바꾸고 싶은데 어떻게 해야하나요?
            </div>
            <div
              className={`question_contents_text_hidden ${
                state[3] ? "text_active" : ""
              }`}
            >
              주소 변경 방법 설명
            </div>
          </div>
          <div className="question_contents">
            <div className="question_contents_text" onClick={() => toggle(4)}>
              취소 하고 싶은데 어떻게 해야하나요?
            </div>
            <div
              className={`question_contents_text_hidden ${
                state[4] ? "text_active" : ""
              }`}
            >
              취소 방법 설명
            </div>
          </div>
          <div className="question_contents">
            <div className="question_contents_text" onClick={() => toggle(5)}>
              기타 문의 사항
            </div>
            <div
              className={`question_contents_text_hidden ${
                state[5] ? "text_active" : ""
              }`}
            >
              기타 문의 사항 설명
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
