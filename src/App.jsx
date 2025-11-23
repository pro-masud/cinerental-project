import { useState } from "react";
import "./App.css";

import { MovieContext, ThemeContext } from "./context/movieContext";
import Pages from "./Pages";

function App() {
  const [cardData, setCardData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);
  return (
    <>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
          <Pages />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
