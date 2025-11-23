import { useState } from "react";
import "./App.css";

import { MovieContext, ThemeContext } from "./context/movieContext";
import Pages from "./Pages";

function App() {
  const [cardData, setCardData] = useState([]);
  const [dark, setDark] = useState(true);
  return (
    <>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <ThemeContext.Provider value={{ dark, setDark }}>
          <Pages />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
