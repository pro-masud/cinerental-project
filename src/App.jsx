import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MainContent />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
