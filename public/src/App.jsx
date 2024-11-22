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
    return (
      <>
        <Header />
        <Main />
        <Teg />
        <ShareLink />
        <Review />
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
