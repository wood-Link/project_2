import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Review from "./components/Review/Review";

function App() {
  function Main() {
    return (
      <>
        <main></main>
      </>
    );
  }
  return (
    <>
      <Header />

      <Review />

      <Footer />
    </>
  );
}

export default App;
