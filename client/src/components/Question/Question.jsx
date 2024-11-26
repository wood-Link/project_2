import { useState } from "react";
import "./Question.css";
import arrow from "../../assets/img/arrow.png";
import arrow2 from "../../assets/img/arrow2.png";

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
      [num]: !prevState[num], // 상태를 반전시켜서 펼쳐지거나 접히게 함
    }));
  }

  return (
    <div className="question_wrap" id="questionBox">
      <section className="question">
        <div className="question_title">자주묻는 질문</div>
        <div className="question_text">"고객님들께서 자주 물어보시는 내용을 정리했어요"</div>
        <div className="question_list">
          <div className="question_contents">
            <div className={`question_contents_text ${state[1] ? "text_active" : ""}`} onClick={() => toggle(1)}>
              배송은 언제 되나요?
              <img className="arrow" src={arrow} alt="arrow" />
              <img className="arrow2" src={arrow2} alt="arrow2" />
            </div>
            <div className={`question_contents_text_hidden ${state[1] ? "text_active" : ""}`}>
              <p>
                - <strong>영업일 기준 오후 1시 이전 결제</strong> 완료 주문건 : 당일 출고됩니다.
                <br />- 공휴일의 경우 다음 영업일에 출고됩니다.(출고된 경우 서울/수도권 지역은 대부분 다음날 수령, 지방은 1~3일 이내에 배송됩니다. 따라서 전체 배송 기간은 (업무일 기준) 3일~7일 정도 소요되며, 일부 택배사 사정에 따라 변동될 수 있습니다.)
              </p>
            </div>
          </div>

          {/* 나머지 질문들도 동일한 방식으로 적용 */}
          <div className="question_contents">
            <div className={`question_contents_text ${state[2] ? "text_active" : ""}`} onClick={() => toggle(2)}>
              결제는 어떻게 하나요?
              <img className="arrow" src={arrow} alt="arrow" />
              <img className="arrow2" src={arrow2} alt="arrow2" />
            </div>
            <div className={`question_contents_text_hidden ${state[2] ? "text_active" : ""}`}>
              <p>
                나눔신청 및 공방에서 신청하신 제품이 접수를 하시면, 고객님께 <strong>나눔신청 접수 알림톡</strong>이 발송됩니다. 해당 알림톡에서 <strong>결제하기란</strong>을 이용해 결제를 하실 수 있습니다.
              </p>
            </div>
          </div>

          <div className="question_contents">
            <div className={`question_contents_text ${state[3] ? "text_active" : ""}`} onClick={() => toggle(3)}>
              제품 신청 후 배송지 변경은 어떻게 하나요?
              <img className="arrow" src={arrow} alt="arrow" />
              <img className="arrow2" src={arrow2} alt="arrow2" />
            </div>
            <div className={`question_contents_text_hidden ${state[3] ? "text_active" : ""}`}>
              <p>
                - 나눔신청 및 공방에서 신청하신 제품이 접수 완료되면, 고객님께 <strong>나눔신청 접수 알림톡</strong>이 발송됩니다. 해당 알림톡에서 <strong>배송지 변경란</strong>을 이용해 배송지 정보를 수정하실 수 있습니다.
              </p>
            </div>
          </div>
          <div className="question_contents">
            <div className={`question_contents_text ${state[4] ? "text_active" : ""}`} onClick={() => toggle(4)}>
              취소 하고 싶은데 어떻게 해야하나요?
              <img className="arrow" src={arrow} alt="arrow" />
              <img className="arrow2" src={arrow2} alt="arrow2" />
            </div>
            <div className={`question_contents_text_hidden ${state[4] ? "text_active" : ""}`}>
              <p>
                - 나눔신청 및 공방에서 신청하신 제품이 접수 완료되면, 고객님께 <strong>나눔신청 접수 알림톡</strong>이 발송됩니다. 해당 알림톡에서 <strong>접수 취소란</strong>을 이용해 접수 취소를 하실 수 있습니다. (배송이 진행 중일 경우 어려울 수 있습니다.)
              </p>
            </div>
          </div>
          <div className="question_contents">
            <div className={`question_contents_text ${state[5] ? "text_active" : ""}`} onClick={() => toggle(5)}>
              기타 문의 사항
              <img className="arrow" src={arrow} alt="arrow" />
              <img className="arrow2" src={arrow2} alt="arrow2" />
            </div>
            <div className={`question_contents_text_hidden ${state[5] ? "text_active" : ""}`}>
              <p>
                - 기타 문의 사항이 있으시면 <strong>1:1문의</strong> 해주시면 성심 성의껏 안내해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
