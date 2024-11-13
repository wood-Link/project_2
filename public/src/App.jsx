import "./App.css";
import Header from "./components/header/Header";

import Teg from "./components/Teg/Teg";

import Review from "./components/Review/Review";
import Question from "./components/Question/Question";
import Footer from "./components/Footer/Footer";

import ShareLink from "./components/ShareLink/ShareLink";
import ShareLinkTab from "./components/ShareLinkTab/ShareLinkTab";


function App() {
  return (
    <>
      <Header />
      <Teg />
      <ShareLink />
      <ShareLinkTab />
      <Review />
      <Question />
      <Footer />
    </>
  );
}

export default App;
