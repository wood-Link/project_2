import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Teg from "./components/Teg/Teg";

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
      <Teg />
      <Main />
      <Footer />
    </>
  );
}

export default App;
