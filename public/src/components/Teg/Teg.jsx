import "./Teg.css";

function Teg() {
  return (
    <>
      <section></section>
      <div className="container">
        {/*  PC 버전: 첫 번째 행 (4개 아이템) */}
        <div className="row pc">
          <div className="item">
            <p>무료나눔</p>
          </div>
          <div className="item">
            <p>가구입양</p>
          </div>
          <div className="item">
            <p>나무사랑</p>
          </div>
          <div className="item">
            <p>합리적인</p>
          </div>
        </div>

        {/* PC 버전: 두 번째 행 (4개 아이템) */}
        <div className="row pc">
          <div className="item">
            <p>환경보호</p>
          </div>
          <div className="item">
            <p>스크래치</p>
          </div>
          <div className="item">
            <p>수제제품</p>
          </div>
          <div className="item">
            <p>자립청년</p>
          </div>
        </div>

        {/*  태블릿 및 모바일 버전: 첫 번째 행 (3개 아이템) */}
        <div className="row tablet-mobile">
          <div className="item">무료나눔</div>
          <div className="item">가구입양</div>
          <div className="item">나무사랑</div>
        </div>

        {/* 태블릿 및 모바일 버전: 가운데 행 (2개 아이템 중앙 정렬)  */}
        <div className="row tablet-mobile center">
          <div className="item">합리적인</div>
          <div className="item">환경보호</div>
        </div>

        {/*  태블릿 및 모바일 버전: 세 번째 행 (3개 아이템) */}
        <div className="row tablet-mobile">
          <div className="item">스크래치</div>
          <div className="item">수제제품</div>
          <div className="item">자립청년</div>
        </div>
      </div>
    </>
  );
}

export default Teg;
