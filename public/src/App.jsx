import "./App.css";
import Header from "./components/header/Header";
import Teg from "./components/Teg/Teg";
import Review from "./components/Review/Review";
import Question from "./components/Question/Question";
import Footer from "./components/Footer/Footer";
import ShareLink from "./components/ShareLink/ShareLink";
import Main from "./components/Main/Main";

function App() {
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

export default App;
