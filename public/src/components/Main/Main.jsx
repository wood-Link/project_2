import "./Main.css";
import logo from "../../assets/img/main_img1.jpg";

function Main() {
  return (
    <section className="mainBox">
      <div className="mainImg">{<img className="tabImg" src={logo}></img>}</div>
      <div className="mainText">
        실용성 있는 원목가구를
        <br /> 나눔 받고 싶으신가요?
      </div>
    </section>
  );
}

export default Main;
