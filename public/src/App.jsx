import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

import Review from "./components/Review/Review";

import Teg from "./components/Teg/Teg";
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


      <Footer />
    </>
  );
}

export default App;
