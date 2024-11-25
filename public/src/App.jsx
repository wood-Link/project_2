import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Teg from "./components/Teg/Teg";
import Review from "./components/Review/Review";
import Question from "./components/Question/Question";
import Footer from "./components/Footer/Footer";
import ShareLink from "./components/ShareLink/ShareLink";
import Main from "./components/Main/Main";
import Delivery from "./components/Delivery/Delivery";

function App() {
  function WoodLink() {
    /* 헤더와 푸터가 계속 필요한 사이트를 만들게 된다면 헤더와 푸터는 컴포넌트에 고정하고
     children으로 페이지 내용만 바뀌게 작성하는게 좋을듯 */
    return (
      <>
        <Header />
        <Main />
        <Teg />
        <Review />
        <ShareLink />
        <Question />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WoodLink />} />
          <Route path="/Delivery/:id" element={<Delivery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
