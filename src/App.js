import { useEffect, useState } from "react";
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
  const [first, setfirst] = useState(null);

  const count = 26254.39;
  const date = new Date("2012-05-24");

  function log(locale) {
    const result = `${new Intl.DateTimeFormat(locale).format(
      date
    )} ${new Intl.NumberFormat(locale).format(count)}`;
    setfirst(result);
  }
  useEffect(() => {
    console.log("Date:", date);
  }, [date]);
const onclick = function (e) {
  console.log(e.target, "hello");
};
return (
  <>
    <div className="container">
      <Sidebar date={date} />
      <Header click={onclick} date={date} />
      <Realters date={date} />
      <Features date={date} />
      <Story date={date} />
      <Home click={onclick} date={date} />
      <Gallery date={date} />
      <Footer date={date} />
    </div>
  </>
);
}

export default App;
