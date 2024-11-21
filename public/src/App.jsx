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
  return (
    <>
      <Header />
      <Main />
      <Teg />
      <ShareLink />
      <Review />
      <Question />
      <Delivery />
      <Footer />
    </>
  );
}

export default App;
