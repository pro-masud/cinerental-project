import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import { useContext } from "react";
import { ThemeContext } from "./context/movieContext";

const Pages = () => {
  const { darkMood } = useContext(ThemeContext);

  return (
    <div className={darkMood ? "dark" : ""}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto">
          <Sidebar />
          <MainContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pages;
