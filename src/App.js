import { useEffect } from "react";
import "./App.scss";
import Features from "./componenets/features/Features";
import Footer from "./componenets/footer/Footer";
import Gallery from "./componenets/gallery/Gallery";
import Header from "./componenets/header/Header";
import Home from "./componenets/homes/Home";
import Realters from "./componenets/realters/Realters";
import Sidebar from "./componenets/sidebar/Sidebar";
import Story from "./componenets/story/Story";

function App() {
  const count = 26254.39;
  const date = new Date("2012-05-24");

  function log(locale) {
    console.log(
      `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(
        locale
      ).format(count)}`
    );
  }
  useEffect(() => {
    console.log("Date:", date);
  }, [date]);

  return (
    <>
      <div className="container">
        <Sidebar />
        <Header />
        <Realters />
        <Features />
        <Story />
        <Home />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
