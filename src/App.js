import { useState } from "react";
import Dasboard from "./components/Dasboard";
import logo from "./logo.svg";
import ThemeContext from "./Theme/Theme";
import StockContext from "./Theme/StockConstex";

function App() {
  
  const [darkMode, setDarkMode] = useState(true);
  const [stockValue, setStockValue] = useState("FB");

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockValue, setStockValue }}>
        <Dasboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
