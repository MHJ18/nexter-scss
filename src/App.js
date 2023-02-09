import "./App.scss";
import Features from "./componenets/features/Features";
import Footer from "./componenets/footer/Footer";
import Gallery from "./componenets/gallery/Gallery";
import Header from "./componenets/header/Header";
import Realters from "./componenets/realters/Realters";
import Sidebar from "./componenets/sidebar/Sidebar";
import Story from "./componenets/story/Story";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Features />
        <Gallery />
        <Realters />
        <Story />
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
